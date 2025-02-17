"use client";

import { createContext, useContext, useState } from "react";



const CartContext = createContext();


export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = async (product) => {
    try {
      
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setCart((prevCart) => {
          const isInCart = prevCart.find((item) => item.id === product.id);
          if (isInCart) {
            return prevCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
          return [...prevCart, { ...product, quantity: 1 }];
        });
      } else {
        console.error("Error al agregar el producto al carrito.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  
  const removeFromCart = async (productId) => {
    try {
      
      const response = await fetch("/api/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: productId }),
      });

      if (response.ok) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      } else {
        console.error("Error al eliminar el producto del carrito.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
