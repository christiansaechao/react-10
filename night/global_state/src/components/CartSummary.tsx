import type { CartLine } from "../types";

interface CartSummaryProps {
  // Needs the whole cart just to compute totals for display.
  cart: CartLine[];
}

export default function CartSummary({ cart }: CartSummaryProps) {
  const itemCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const total = cart.reduce(
    (sum, line) => sum + line.product.price * line.quantity,
    0,
  );

  return (
    <div className="summary">
      <p className="muted">{itemCount} item(s)</p>
      <p className="summary-total">Total: ${total.toFixed(2)}</p>
      <button>Checkout</button>
    </div>
  );
}
