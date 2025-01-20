"use client";

import React, { useEffect, useState } from "react";
import products from "@/components/products";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [cartMessage, setCartMessage] = useState(""); 

  useEffect(() => {
    if (params?.id) {
      const foundProduct = products.find(
        (product) => product.id === parseInt(params.id)
      );
      setProduct(foundProduct);
    }
  }, [params]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isInCart = cart.find((item) => item.id === product.id);

    if (!isInCart) {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      setCartMessage("Producto añadido al carrito correctamente.");
    } else {
      setCartMessage("El producto ya está en el carrito.");
    }

    setTimeout(() => {
      setCartMessage("");
    }, 3000);
  };

  if (!product) {
    return (
      <p className="text-center text-lg font-semibold mt-10">
        Producto no encontrado.
      </p>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto p-6 space-y-6">
        <div className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">
              Categoría: {product.category}
            </span>
            <span className="text-xl font-bold text-green-600">
              ${product.price}
            </span>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Agregar al carrito
          </button>
        </div>
      </div>

      {cartMessage && (
        <div className="mt-6 px-4 py-2 border-l-4 border-green-500 bg-green-50 text-green-700 rounded-md">
          {cartMessage}
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
