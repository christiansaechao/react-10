import ProblemCard from "../extras/ProblemCard";
import { ProductCard } from "./ProductCard";

export const PreFilter = () => {
  const products = [
    { id: 1, name: "Notebook", inStock: false },
    { id: 2, name: "Pen", inStock: false },     
    { id: 3, name: "Backpack", inStock: true }, 
  ];

  return (
    <ProblemCard
      title="Filter 10 — Pre-filtered rendering"
      method="filter"
      question="Filter to in-stock products first, then map into a reusable component."
      dataPreview={products}
    >
      {products.map((product) => (
        <ProductCard
          name={product.name}
          inStock={product.inStock}
        />
      ))}
    </ProblemCard>
  );
};
