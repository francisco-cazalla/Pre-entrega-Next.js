"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebase/firebaseConfig";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { useNotification } from "@/components/NotificationContext";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: ""
  });
  
  const [editingId, setEditingId] = useState(null);
  const { showNotification } = useNotification();

  
  const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, "products");
      const snapshot = await getDocs(productsCollection);
    
      const fetchedProducts = snapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      showNotification("Error al obtener los productos", 3000);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!form.name || !form.price) {
        showNotification("Por favor, complete los campos obligatorios", 3000);
        return;
      }
      if (editingId) {
        
        const productRef = doc(db, "products", editingId.toString());
        await updateDoc(productRef, { ...form });
        showNotification("Producto actualizado exitosamente", 3000);
      } else {
        
        await addDoc(collection(db, "products"), { ...form, inCart: false });
        showNotification("Producto agregado exitosamente", 3000);
      }
      setForm({ name: "", description: "", price: "", image: "", category: "" });
      setEditingId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error al guardar el producto:", error);
      showNotification("Error al guardar el producto", 3000);
    }
  };

  
  const handleEdit = (product) => {
    setEditingId(product.firebaseId); 
    setForm({
      name: product.name || "",
      description: product.description || "",
      price: product.price || "",
      image: product.image || "",
      category: product.category || ""
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Panel de Administración</h1>

      
      <form onSubmit={handleSubmit} className="bg-white p-4  mb-8 rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-black">
          {editingId ? "Editar Producto" : "Agregar Producto"}
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="border p-2 rounded"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descripción"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Precio"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="URL de la imagen"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Categoría"
            className="border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          {editingId ? "Actualizar Producto" : "Agregar Producto"}
        </button>
      </form>

     
      <div>
        <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
        {products.length === 0 ? (
          <p>No hay productos.</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li
                key={product.firebaseId}
                className="border p-4 mb-2 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold">{product.name}</h3>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <p>{product.category}</p>
                </div>
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Editar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
