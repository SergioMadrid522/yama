/* import { useEffect } from "react";

function filteredProducts(query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
  }, []);
  const filteredProducts =
    normalizedQuery.length > 0
      ? products.filter((product) => {
          return product.productName.toLowerCase().includes(normalizedQuery);
        })
      : [];
}
 */
