import dynamic from "next/dynamic";


import AddToCartButton from "@/components/AddtoCartButton";

import { getProductById } from "@/actions/getProductById";
import { Suspense } from "react";
import ProductsLoader from "@/components/ProductLoader";


export default async function ProductDetail({ params }) {
  const { id } = params;  
  const product = await getProductById(id);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
          <p className="text-gray-600">Lo sentimos, no se encontró el producto que estás buscando.</p>
        </div>
      </div>
    );
  }
  
  return (
    <>
    
    <section className="min-h-full bg-gray-100 flex flex-col items-center justify-center py-10">
    <Suspense fallback={<ProductsLoader/>}>
      <div className="bg-white  max-w-4xl mx-auto p-6 space-y-6 shadow-2xl rounded-2xl">
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
            <span className="text-3xl font-bold text-green-600 text-center justify-center">
              ${product.price}
            </span>
          </div>
        </div>
        <div className="text-center">
        <AddToCartButton productId={product.firebaseId} />
        </div>
      </div>

      </Suspense>
    </section>
    </>
  );
};

