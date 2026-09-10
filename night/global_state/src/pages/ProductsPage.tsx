import type { Product } from "../types";
import CategoryBar from "../components/CategoryBar";
import ProductList from "../components/ProductList";


// interface & type
// ProdctsPageProps extends 

interface ProductsPageProps {
  products: Product[];
  // #2 category: this page renders the CategoryBar, so it needs these...
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  // #1 search + #3 cart: this page never touches these -- it only passes
  // them straight through to ProductList. Pure prop drilling.
  searchQuery: string;
  onAddToCart: (product: Product) => void;
}

export default function ProductsPage({
  products,
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onAddToCart,
}: ProductsPageProps) {
  return (
    <section>
      <h1>Products</h1>

      <CategoryBar
        categories={categories}
        selected={selectedCategory}
        onSelect={onSelectCategory}
      />

      <ProductList
        products={products}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onAddToCart={onAddToCart}
      />
    </section>
  );
}
