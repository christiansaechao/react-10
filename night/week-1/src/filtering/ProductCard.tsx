import React from "react";

export const ProductCard = ({
  name,
  inStock,
}: {
  name: string;
  inStock: boolean;
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{inStock ? "In stock" : "Out of stock"}</p>
    </div>
  );
};
