"use client";

import React, { useEffect, useState } from "react";
import RemoveButton from "@/components/RemoveButton";
import { getCartItems } from "../api/products/cart/route";
import { Suspense } from "react";
import ProductsLoader from "@/components/ProductLoader";



const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const items = await getCartItems();
      setCartItems(items);
      calculateTotal(items); 
    };

    fetchCart();
  }, []);
  const handleRemoveFromCart = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = (items) => {
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalPrice);
  };

  

  return (
    <>
    <div className="flex flex-col p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <Suspense fallback={<ProductsLoader/>}>
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
                  <RemoveButton id={product.id} onRemove={handleRemoveFromCart} />
                    <button
                      type="button"
                      onClick={() => handleRemove(product.id)}
                      className="flex items-center px-2 py-1 pl-0 space-x-1 text-red-500 hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      
                    </button>
                    <button type="button" className="flex items-center px-2 py-1 space-x-1 text-blue-500 hover:underline">
                      
                      
                    </button>
                    
                  </div>
                </div>
              </div>
              
            </li>
            
          ))}<div className=" text-center text-4xl mt-4 p-2 bg-red-600 text-white rounded-md hover:bg-white hover:text-black transition-all">
          <h2>Total: ${total}</h2>
          </div>
        </ul>
        
      ) : (
        <div className="text-center text-gray-500">
          <p>Your cart is empty. Start adding products to see them here!</p>
        </div>
      )}
      </Suspense>
    </div>
    </>
  );
};

export default Cart;