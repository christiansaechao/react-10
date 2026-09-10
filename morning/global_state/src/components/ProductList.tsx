import type { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  // #1 search + #2 category: ProductList is the only place these two are
  // actually *used* (to filter). Everything above just carried them here.
  searchQuery: string;
  selectedCategory: string;
  // #3 cart: forwarded one more level down to ProductCard.
  onAddToCart: (product: Product) => void;
}

export default function ProductList({
  products,
  searchQuery,
  selectedCategory,
  onAddToCart,
}: ProductListProps) {
  const query = searchQuery.trim().toLowerCase();

  const visible = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (visible.length === 0) {
    return <p className="muted">No products match your filters.</p>;
  }

  return (
    <div className="product-grid">
      {visible.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
