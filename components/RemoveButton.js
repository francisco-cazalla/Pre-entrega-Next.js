"use client";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { useNotification } from "./NotificationContext";

export default function RemoveButton({ productId, onRemoved }) {
  const { showNotification } = useNotification();

  const handleRemove = async () => {
    try {
      if (!productId || typeof productId !== "string") {
        throw new Error("ID del producto no proporcionado.");
      }
      const prodIdStr = productId.toString();
      const productRef = doc(db, "products", prodIdStr);
      await updateDoc(productRef, { inCart: false });
      if (onRemoved) {
        onRemoved(productId);
      }
      showNotification("Producto eliminado del carrito.");
    } catch (error) {
      console.error("Error al eliminar el producto del carrito:", error);
      showNotification("Error al eliminar el producto del carrito.");
    }
  };

  return (
    <button
      onClick={handleRemove}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Remover del carrito
    </button>
  );
}
