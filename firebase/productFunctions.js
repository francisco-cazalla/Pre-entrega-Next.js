// firebase/productFunctions.js
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Función para marcar un producto como agregado al carrito (inCart: true)
export async function addToCart(productId) {
  try {
    if (!productId) {
      throw new Error("ID del producto no proporcionado.");
    }
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, { inCart: true });
    console.log(`Producto ${productId} marcado como inCart: true`);
  } catch (error) {
    console.error("Error al agregar el producto al carrito:", error);
    throw error;
  }
}

// Función para remover un producto del carrito (inCart: false)
export async function removeFromCart(productId) {
  try {
    if (!productId) {
      throw new Error("ID del producto no proporcionado.");
    }
    const productRef = doc(db, "products", productId);
    await updateDoc(productRef, { inCart: false });
    console.log(`Producto ${productId} marcado como inCart: false`);
  } catch (error) {
    console.error("Error al remover el producto del carrito:", error);
    throw error;
  }
}