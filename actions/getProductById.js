import { db } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function getProductById(id) {
  if (!id) {
    console.error("El ID del producto no se proporcionó.");
    return null;
  }
    try {
      const productRef = doc(db, "products", id); // Referencia al documento con el ID
      const productSnap = await getDoc(productRef);
  
      if (productSnap.exists()) {
        return { id: productSnap.id, ...productSnap.data() };
      } else {
        console.error("No se encontró el producto.");
        return null;
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      return null;
    }
  }