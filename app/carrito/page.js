"use client";

import React, { useEffect, useState } from "react";
import RemoveButton from "@/components/RemoveButton";
import { getCartItems } from "../api/products/cart/route";
import { Suspense } from "react";
import ProductsLoader from "@/components/ProductLoader";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import Loading from "@/components/loading";
import { useNotification } from "@/components/NotificationContext";




const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showNotification } = useNotification();

  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const items = await getCartItems(); // Llama a la API
        setCartItems(items);
      } catch (error) {
        console.error("Error cargando carrito:", error);
      } finally {
        setLoading(false); // Asegura que el loading se desactiva
      }
    };

    loadCartItems();
  }, []);

  const handleRemoved = (removedFirebaseId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.firebaseId !== removedFirebaseId)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  const handleCompra = () => {
    
    const orderNumber = Math.floor(Math.random() * 900000) + 100000;
    showNotification(
      `Compra exitosa. Tu número de orden es: ${orderNumber}`,
      5000
    );}

  
  if (loading) return  <Loading/> ;
  

  
  if (cartItems.length === 0) return <div className="text-center text-slate-950 text-5xl p-56 bg-white">
  <p>Your cart is empty. Start adding products to see them here!</p>
</div>;


  
  return (
    <>
    
    <div className="flex flex-col p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      
      <h2 className="text-xl font-semibold">Your Cart</h2>
      {cartItems.length > 0 ? (
        <ul className="flex flex-col divide-y dark:divide-gray-300">
          {cartItems.map((product) => (
            <li key={product.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={product.image}
                  alt={product.name}
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {product.name}
                      </h3>
                      <p className="text-sm dark:text-gray-600">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                  <RemoveButton productId={product.firebaseId} onRemoved={handleRemoved} />
                    
                    <button type="button" className="flex items-center px-2 py-1 space-x-1 text-blue-500 hover:underline">
                      
                      
                    </button>
                    
                  </div>
                </div>
              </div>
              
            </li>
            
          ))}<div className=" text-center text-4xl mt-4 p-2 bg-red-600 text-white rounded-md hover:bg-white hover:text-black transition-all">
          <h3 className="mt-4">Total: ${calculateTotal()}</h3>
          </div>
          <button
        onClick={handleCompra}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        Comprar
      </button>
        </ul>
        
      ) : (
        <div className="text-center text-gray-500">
          <p>Your cart is empty. Start adding products to see them here!</p>
        </div>
      )}
    
    </div>
    
    </>
  );
  
};

export default Cart;