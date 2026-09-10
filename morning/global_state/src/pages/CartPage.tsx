import type { CartLine } from "../types";
import CartLineItem from "../components/CartLineItem";
import CartSummary from "../components/CartSummary";

interface CartPageProps {
  // The cart and its handlers all originate in App and are drilled here:
  // App -> CartPage -> CartLineItem / CartSummary
  cart: CartLine[];
  onRemove: (productId: string) => void;
  onSetQuantity: (productId: string, quantity: number) => void;
}

export default function CartPage({
  cart,
  onRemove,
  onSetQuantity,
}: CartPageProps) {
  if (cart.length === 0) {
    return (
      <section>
        <h1>Your cart</h1>
        <p className="muted">Nothing here yet.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Your cart</h1>
      <ul className="cart-list">
        {cart.map((line) => (
          <CartLineItem
            key={line.product.id}
            line={line}
            onRemove={onRemove}
            onSetQuantity={onSetQuantity}
          />
        ))}
      </ul>
      <CartSummary cart={cart} />
    </section>
  );
}
