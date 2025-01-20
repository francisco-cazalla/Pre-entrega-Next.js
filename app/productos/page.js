"use client";
import React, { useState } from "react";
import products from "@/components/products";
import Link from "next/link";

const Productos = () => {

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");


  const categories = [...new Set(products.map((product) => product.category))];


  const priceRanges = [
    { label: "Menos de $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "Más de $200", min: 200, max: Infinity },
  ];


  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    applyFilters(category, selectedPrice);
  };


  const handlePriceChange = (e) => {
    const price = e.target.value;
    setSelectedPrice(price);
    applyFilters(selectedCategory, price);
  };


  const applyFilters = (category, price) => {
    const range = priceRanges.find((range) => range.label === price);
    const filtered = products.filter((product) => {
      const inCategory = category ? product.category === category : true;
      const inPrice =
        range && range.min <= product.price && product.price <= range.max;
      return inCategory && (price ? inPrice : true);
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <aside className="w-64 p-6 bg-white shadow-md dark:bg-gray-50 dark:text-gray-800">
        <nav className="space-y-8 text-sm">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
              Filtrar Productos
            </h2>
            
            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-medium">
                Categoría
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full border rounded-md p-2"
              >
                <option value="">Todas</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="price" className="block text-sm font-medium">
                Rango de Precio
              </label>
              <select
                id="price"
                value={selectedPrice}
                onChange={handlePriceChange}
                className="w-full border rounded-md p-2"
              >
                <option value="">Todos</option>
                {priceRanges.map((range) => (
                  <option key={range.label} value={range.label}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      </aside>

      
	  <div className="flex justify-start p-6 space-x-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-screen-xl">
    {filteredProducts.map((product) => (
      <div
        key={product.id}
        className="w-64 p-4   "
      >
        <div className="border rounded p-4 shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover object-center w-full rounded-md h-40"
          />
          <div className="mt-4">
            <span className="block text-xs font-medium tracking-widest uppercase text-red-600">
              {product.name}
            </span>
            <h2 className="text-lg font-semibold mt-2">{product.category}</h2>
          </div>
          <p className="text-gray-800 mt-2">${product.price}</p>
          <Link href={`/productos/${product.id}`} passHref>
                <button className="mt-4 p-2 bg-blue-500 text-white rounded-md">
                  Ver Detalles
                </button>
              </Link>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
};

export default Productos;