import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";


const db = getFirestore();

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const fetchedProducts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts);

     
      localStorage.setItem("products", JSON.stringify(fetchedProducts));
    };

    fetchProducts();
  }, []);

  const handleViewMore = (productId) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => handleViewMore(product.id)}>Ver más</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
