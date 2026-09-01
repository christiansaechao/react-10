import ProblemCard from "../extras/ProblemCard";

// cart.reduce((acc, curr) => , default value)
// reduce, filter, map => loop over every item in the array

export const CartTotal = () => {
  const cart = [
    { id: 1, name: "Book", price: 10, quantity: 2 },
    { id: 2, name: "Pen", price: 3, quantity: 5 },
    { id: 2, name: "Pen", price: 3, quantity: 5 },
    { id: 2, name: "Pen", price: 3, quantity: 5 },
    { id: 2, name: "Pen", price: 3, quantity: 5 },
    { id: 2, name: "Pen", price: 3, quantity: 5 },
  ];

  const cart_total = cart.reduce((acc, item) => {
    const totol_cost_of_one_item = item.price * item.quantity;
    acc + totol_cost_of_one_item;

    return acc;
  }, 0);

  return (
    <ProblemCard
      title="Reduce 09 — Calculate totals"
      method="reduce"
      question="Use reduce() to calculate total cost: sum(price * quantity)."
      dataPreview={cart}
    ></ProblemCard>
  );
};
