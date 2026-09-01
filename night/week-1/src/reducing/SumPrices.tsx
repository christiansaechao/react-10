export const SumPrices = () => {
  const products = [
    { id: 1, name: "Mouse", price: 25 },
    { id: 2, name: "Keyboard", price: 55 },
    { id: 2, name: "Monitor", price: 82 },
    { id: 2, name: "Chocolate", price: 29 },
  ];

  type Product = {
    id: number;
    name: string; 
    price: number;
  }

  // Goal: Sum all product prices
  // Start: 0
  // End Goal: 191
  // count: +price

  // map, filter, reduce 
  // .map((item) => )

  const totalAmount = products.reduce<number>((acc, curr: Product) => {
    return (acc += curr.price);
  }, 0);

  return (
    <ProblemCard
      title="Reduce 03 — Sum object values"
      method="reduce"
      question="Use reduce() to sum all product prices."
      dataPreview={products}
    ></ProblemCard>
  );
};
