import { products, promos, bestSellerProducts } from "@/products.data";
import { Product } from "@/types";

export function shuffleProducts() {
  return [...products].sort(() => Math.random() - 0.5);
}

export function filterProducts(list: Product[], query: string) {
  return list.filter(
    (product) =>
      product.productName.toLowerCase().includes(query) ||
      product.ingredients.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query),
  );
}

export function getDefaultList(pathname: string, shuffled: Product[]) {
  if (pathname === "/") return bestSellerProducts;
  if (pathname === "/promociones") return promos;
  return shuffled.slice(0, 10);
}

export function getSectionTitle(pathname: string, isSearching: boolean) {
  if (isSearching) return "Productos relacionados";
  if (pathname === "/promociones") return "¿Cómo combinarás tus sushis?";
  if (pathname === "/buscarProducto") return "Descubre algo delicioso";
  return "";
}
