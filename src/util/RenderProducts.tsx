"use client";

import ProductCard from "./ProductCard";
import { Product, RenderProductsProps } from "@/types";
import { useProducts } from "@/hooks/useProducts";

export default function RenderProducts({ query = "" }: RenderProductsProps) {
  const { products, title, isSearching, hasResults } = useProducts(query);
  const dismissKeyboard = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };
  if (isSearching && !hasResults) {
    return (
      <>
        <h2 className="font-sans font-[900] text-3xl md:text-4xl tracking-tighter text-gray-900 select-none text-center mb-6">
          Oops...
        </h2>

        <div className="flex w-full flex-col items-center justify-center text-center min-h-[50vh] md:min-h-[400px]">
          <div className="max-w-md space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-gray-600">
              No encontramos nada con "{query}"
            </p>
            <p className="text-sm md:text-base text-gray-400">
              Intenta buscar por ingrediente, categoría o nombre del producto.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h2
        className="text-3xl md:text-4xl font-black text-center mb-6 mt-0"
        onTouchStart={dismissKeyboard}
        onWheel={dismissKeyboard}
      >
        {title}
      </h2>

      <div
        className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
        onTouchStart={dismissKeyboard}
        onWheel={dismissKeyboard}
      >
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
