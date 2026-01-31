import { products, promos, bestSellerProducts } from "@/products.data";
import { Product } from "@/types";

export function shuffleProducts() {
  return [...products].sort(() => Math.random() - 0.5);
}

function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // separa letras de acentos
    .replace(/[\u0300-\u036f]/g, ""); // elimina los acentos
}

export function filterProducts(list: Product[], query: string) {
  const normalizedQuery = normalizeText(query);

  return list.filter((product) => {
    const name = normalizeText(product.productName);
    const ingredients = normalizeText(product.ingredients);

    const matchCategory = product.category.some((cat) =>
      normalizeText(cat).includes(normalizedQuery),
    );

    return (
      name.includes(normalizedQuery) ||
      ingredients.includes(normalizedQuery) ||
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
