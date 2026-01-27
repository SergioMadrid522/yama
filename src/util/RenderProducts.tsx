"use client";

import ProductCard from "./ProductCard";
import { RenderProductsProps } from "@/types";
import { useProducts } from "@/hooks/useProducts";

export default function RenderProducts({ query = "" }: RenderProductsProps) {
  const { products, title, isSearching, hasResults } = useProducts(query);

  if (isSearching && !hasResults) {
    return (
      <>
        <h2 className="font-sans font-[900] text-3xl tracking-tighter text-gray-900 select-none text-center">
          Oops...
        </h2>
        <div className="flex w-full flex-col items-center justify-center text-center px-4 py-10 min-h-[50vh] md:min-h-[400px]">
          <div className="max-w-md mx-auto space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-gray-600">
              No encontramos nada con "{query}"
            </p>
            <p className="text-sm md:text-base text-gray-400">
              Intenta buscar por otro ingrediente o usando el nombre del
              producto
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="px-5">
      <h2 className="text-3xl font-black text-center">{title}</h2>

      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}
