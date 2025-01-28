"use client";

import { useState, useEffect } from "react"; 
import Link from "next/link";
import { db } from "@/firebase/firebaseConfig"; 
import { collection, getDocs } from "firebase/firestore"; // Importar correctamente los métodos


function ProductList({ productos}) { 
console.log('🇯🇴 products:', productos);

  
  //const [products, setProducts] = useState(initialProducts);

  {/*useEffect(() => {
    if (!initialProducts || initialProducts.length === 0) {
      const fetchProducts = async () => {
        try {
          // Obtener la referencia de la colección
          const productsCollection = collection(db, "products"); 
          const snapshot = await getDocs(productsCollection); // Obtener los productos
          const fetchedProducts = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProducts(fetchedProducts);
        } catch (error) {
          console.error("Error al obtener los productos:", error);
        }
      };
      fetchProducts();
    }
  }, [initialProducts]);*/}

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-screen-xl">
      {productos && productos.length > 0 ? (
        productos.map(product => (
          <div key={product.id} className="w-64 p-4">
            <div className="border rounded p-4 shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover object-center w-full rounded-md h-40"
              />
              <div className="mt-4">
                <span className="block text-xs font-medium tracking-widest uppercase text-red-600">
                  {product.name}
                </span>
                <h2 className="text-lg font-semibold mt-2">{product.category}</h2>
              </div>
              <p className="text-gray-800 mt-2">${product.price}</p>
              <Link href={`/productos/${product.id}`} passHref>
                <button className="mt-4 p-2 bg-red-600 text-white rounded-md hover:bg-white hover:text-black transition-all">
                  Ver Detalles
                </button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const productsCollection = collection(db, "products");
    const snapshot = await getDocs(productsCollection);
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      props: {
        products: products || [],
      },
    };
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default ProductList;






/*
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-screen-xl">
      
<div key={product.id} className="w-64 p-4">
  <div className="border rounded p-4 shadow-md">
    <img
      src={product.image}
      alt={product.name}
      className="object-cover object-center w-full rounded-md h-40"
    />
    <div className="mt-4">
      <span className="block text-xs font-medium tracking-widest uppercase text-red-600">
        {product.name}
      </span>
      <h2 className="text-lg font-semibold mt-2">{product.category}</h2>
    </div>
    <p className="text-gray-800 mt-2">${product.price}</p>
    <Link href={`/productos/${product.id}`} passHref>
      <button className="mt-4 p-2 bg-red-600 text-white rounded-md  hover:bg-white hover:text-black transition-all">
        Ver Detalles
      </button>
    </Link>
  </div>
</div>

</div>*/