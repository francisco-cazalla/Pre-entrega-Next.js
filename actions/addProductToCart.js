import { doc, updateDoc } from "firebase/firestore"; // Importar los métodos necesarios
import { db } from "@/firebase/firebaseConfig";


// Función que se ejecutará al presionar el botón
const handleAddToCart = async (productId) => {
  try {
    // Referencia al documento utilizando el id generado por Firestore
    const productRef = doc(db, "products", String(productId));

    // Actualizar el campo 'inCart'
    await updateDoc(productRef, {
      inCart: true, // Marcar como agregado al carrito
    });

    console.log("Producto agregado al carrito con éxito");
  } catch (error) {
    console.error("Error al agregar el producto al carrito:", error);
  }
};

export default handleAddToCart;