"use client"

import { useState } from "react";
import { addProductToCart } from "@/actions/addProductToCart";

export default function AddToCartButton({ product }) {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!product) {
      console.error("El producto no es válido.");
      return;
    }

    try {
      setLoading(true);
      await addProductToCart(product);
      console.log("Producto agregado al carrito.");
    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleAddToCart} disabled={loading}>
      {loading ? "Agregando..." : "Agregar al carrito"}
    </button>
  );
}