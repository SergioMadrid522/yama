"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { promos, products } from "@/products.data";
import {
  filterProducts,
  getDefaultList,
  getSectionTitle,
  shuffleProducts,
} from "@/util/productHelpers";

export function useProducts(query: string) {
  const pathname = usePathname();
  const [shuffled, setShuffled] = useState<typeof products>([]);
  // const [shuffled, setShuffled] = useState(shuffleProducts());

  const normalizedQuery = query.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;
  // when try to solve the error this will be commented
  useEffect(() => {
    setShuffled(shuffleProducts());
  }, []);

  let filtered: typeof products = [];

  if (isSearching && pathname === "/promociones") {
    filtered = filterProducts(promos, normalizedQuery);
  }

  if (isSearching && pathname === "/buscarProducto") {
    filtered = filterProducts(products, normalizedQuery);
  }

  const productsToShow = isSearching
    ? filtered
    : pathname === "/promociones"
      ? promos.slice(0, 6)
      : getDefaultList(pathname, shuffled);

  const title = getSectionTitle(pathname, isSearching);

  return {
    products: productsToShow,
    title,
    isSearching,
    hasResults: productsToShow.length > 0,
    query,
  };
}
