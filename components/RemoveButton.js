"use client";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { removeCartItem } from "@/app/api/products/cart/route";

function RemoveButton({ id, onRemove }) {
  const handleRemove = async () => {
    try {
      
      if (!id || typeof id !== "string") {
        throw new Error("ID inválido o no proporcionado.");
      }

      
      const productRef = doc(db, "cart", id);
      await deleteDoc(productRef);

      
      if (onRemove) {
        onRemove(id);
      }

      alert("Producto eliminado del carrito.");
    } catch (error) {
      console.error("No se pudo eliminar el producto:", error);
    }
  };

  return (
    <button
      onClick={removeCartItem}
      className="remove-btn bg-red-500 text-white px-3 py-1 rounded"
    >
      Eliminar
    </button>
  );
}

export default RemoveButton;