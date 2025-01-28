"use client";
import Link from "next/link";

export default function ProductLayout({ children }) {
  const categorias = [
    { id: 1, name: "Laptops" },
    { id: 2, name: "Smartphones" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Watches" },
  ];

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
              <div className="flex flex-col gap-4">
                <Link
                  href="/products"
                  className="border rounded-lg bg-red-600 text-white p-2 text-lg hover:bg-white hover:text-black transition-all"
                >
                  Todos
                </Link>
                {/* {categorias.map((categorias) =>  (
                  
                  <Link
                    key={categorias.id}
                    href={`/products/${categorias.name}`}
                    className="border rounded-lg bg-red-600 text-white p-2 text-lg hover:bg-white hover:text-black transition-all"
                  >
                    {categorias.name}
                  </Link>
                ))}*/}
              {categorias.map((categorias) => {
                const categoryPath = `/products/${categorias.name}`
                console.log("categorias en lyout de products")
                console.log(categorias.name)

                return(
                  <Link key={categorias.id}
                  href={categoryPath}
                  className="border rounded-lg bg-red-600 text-white p-2 text-lg hover:bg-white hover:text-black transition-all">
                    {categorias.name}
                  </Link>
                )
              })}

              </div>
            </div>
          </div>
        </nav>
      </aside>
      <div className="grow">{children}</div>
    </div>
  );
}
