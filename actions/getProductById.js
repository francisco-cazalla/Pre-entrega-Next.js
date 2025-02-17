import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function getProductById(id) {
  if (!id) {
    console.error("El ID del producto no se proporcionó.");
    return null;
  }
  try {
    // Usamos el id proporcionado para buscar el documento en la colección "products"
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);
  
    if (productSnap.exists()) {
      // Retornamos el producto con el ID de Firebase en una propiedad 'firebaseId'
      return { firebaseId: productSnap.id, ...productSnap.data() };
    } else {
      console.error("No se encontró el producto.");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return null;
  }
}