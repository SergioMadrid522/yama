"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { promos, products } from "@/data";
import {
  filterProducts,
  getDefaultList,
  getSectionTitle,
  shuffleProducts,
} from "@/util/productHelpers";

export function useProducts(query: string) {
  const pathname = usePathname();
  const [shuffled, setShuffled] = useState<typeof products>([]);

  const normalizedQuery = query.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  useEffect(() => {
    setShuffled(shuffleProducts());
  }, []);

  let filtered: typeof products = [];

  if (isSearching && pathname === "/buscarProducto") {
    filtered = filterProducts(products, normalizedQuery);
  }

  if (isSearching && pathname === "/promociones") {
    filtered = filterProducts(promos, normalizedQuery);
  }

  const productsToShow = isSearching
    ? filtered
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
