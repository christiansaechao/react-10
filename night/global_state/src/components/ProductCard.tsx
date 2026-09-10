import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  // This is the component that actually calls onAddToCart.
  // The function was created in App and passed down:
  // App -> ProductsPage -> ProductList -> ProductCard
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <article className="card">
      <div className="card-image">{product.image}</div>
      <h2>{product.name}</h2>
      <p className="muted">{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </article>
  );
}
