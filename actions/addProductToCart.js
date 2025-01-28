import { db } from "@/firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


export async function addProductToCart(product) {
  try {
    const cartRef = collection(db, "cart"); 
    const docRef = await addDoc(cartRef, product);
    console.log("Producto agregado al carrito con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar el producto al carrito:", error);
    throw new Error("No se pudo agregar el producto al carrito.");
  }
}