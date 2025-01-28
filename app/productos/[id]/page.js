import AddToCartButton from "@/components/AddtoCartButton";

import { getProductById } from "@/actions/getProductById";
import { Suspense } from "react";
import ProductsLoader from "@/components/ProductLoader";


export default async function ProductDetail  ({ params }) {
  
  const { id } = await params;

 
  const product = await getProductById(id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }
  return (
    <>
    
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
    <Suspense fallback={<ProductsLoader/>}>
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
        <AddToCartButton product={product} />
        </div>
      </div>

      </Suspense>
    </section>
    </>
  );
};

