"use client";

import { bestSellerProducts, products } from "@/data";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RenderProductsProps } from "@/types";
import ProductCard from "./ProductCard";
export default function RenderProducts({ query = "" }: RenderProductsProps) {
  const pathname = usePathname();
  const [shuffledProducts, setShuffledProducts] = useState<typeof products>([]);
  const normalizedQuery = query.trim().toLowerCase();
  const defaultList =
    pathname === "/" ? bestSellerProducts : shuffledProducts.slice(0, 10);
  const isSearching = normalizedQuery.length > 0;

  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
  }, []);

  const filteredProducts = isSearching
    ? products.filter((product) => {
        return (
          product.productName.toLowerCase().includes(normalizedQuery) ||
          product.ingredients.toLowerCase().includes(normalizedQuery)
        );
      })
    : [];

  if (isSearching && filteredProducts.length === 0) {
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
  const productsToShow = isSearching ? filteredProducts : defaultList;
  const sectionTitle = isSearching
    ? "Productos relacionados"
    : "Descubre algo delicioso";

  return (
    <section className="px-5">
      <h2 className="font-sans font-[900] text-3xl tracking-tighter text-gray-900 select-none text-center">
        {sectionTitle}
      </h2>

      {productsToShow.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}
