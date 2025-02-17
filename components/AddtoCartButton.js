"use client";

import { useEffect, useState } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { useNotification } from "./NotificationContext";

export default function AddToCartButton({ productId }) {
  const [inCart, setInCart] = useState(false);
  const { showNotification } = useNotification();

  useEffect(() => {
    const fetchInCart = async () => {
      if (!productId) {
        console.error("ProductId is undefined");
        return;
      }
      const prodIdStr = productId.toString();
      const productRef = doc(db, "products", prodIdStr);
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) {
        const data = productSnap.data();
        setInCart(data.inCart || false);
      } else {
        console.error("El producto no existe en Firebase.");
      }
    };

    fetchInCart();
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      if (inCart) {
        showNotification("Este producto ya está en el carrito.");
        return;
      }
      if (!productId) {
        console.error("ProductId is undefined al agregar al carrito.");
        return;
      }
      const prodIdStr = productId.toString();
      const productRef = doc(db, "products", prodIdStr);
      await updateDoc(productRef, { inCart: true });
      setInCart(true);
      showNotification("Producto agregado al carrito.");
    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
      showNotification("Hubo un problema al agregar el producto al carrito.");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`px-4 py-2 rounded ${inCart ? "bg-gray-400" : "bg-red-600 text-white hover:bg-white hover:text-red-600 transition-all duration-500"}`}
      disabled={inCart}
    >
      {inCart ? "En el carrito" : "Agregar al carrito"}
    </button>
  );
}