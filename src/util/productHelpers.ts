import { products, promos, bestSellerProducts } from "@/products.data";
import { Product } from "@/types";

export function shuffleProducts() {
  return [...products].sort(() => Math.random() - 0.5);
}

export function filterProducts(list: Product[], query: string) {
  const lowerQuery = query.toLowerCase().trim();
  return list.filter((product) => {
    const matchCategory = product.category.some((cat) =>
      cat.includes(lowerQuery),
    );

    return (
      product.productName.toLowerCase().includes(lowerQuery) ||
      product.ingredients.toLowerCase().includes(lowerQuery) ||
      matchCategory
    );
  });
}

export function getDefaultList(pathname: string, shuffled: Product[]) {
  if (pathname === "/") return bestSellerProducts;
  return shuffled.slice(0, 6);
}

export function getSectionTitle(pathname: string, isSearching: boolean) {
  if (isSearching) return "Productos relacionados";
  if (pathname === "/promociones") return "¿Cómo combinarás tus sushis?";
  if (pathname === "/buscarProducto") return "Descubre algo delicioso";
  return "";
}

/* 

export function filterProducts(list: Product[], query: string) {
  const lowerQuery = query.toLowerCase().trim();

  return list.filter((product) => {
    const matchCategory = product.category.some((cat) =>
      cat.includes(lowerQuery)
    );

    return (
      product.productName.toLowerCase().includes(lowerQuery) ||
      product.ingredients.toLowerCase().includes(lowerQuery) ||
      matchCategory
    );
  });
}



*/
