import type { CartLine } from "../types";

interface CartLineItemProps {
  line: CartLine;
  // Both handlers come from App, through CartPage, to here.
  onRemove: (productId: string) => void;
  onSetQuantity: (productId: string, quantity: number) => void;
}

export default function CartLineItem({
  line,
  onRemove,
  onSetQuantity,
}: CartLineItemProps) {
  const { product, quantity } = line;

  return (
    <li className="cart-row">
      <span className="cart-row-image">{product.image}</span>
      <span className="cart-row-name">{product.name}</span>
      <span className="cart-row-controls">
        <button onClick={() => onSetQuantity(product.id, quantity - 1)}>–</button>
        <span>{quantity}</span>
        <button onClick={() => onSetQuantity(product.id, quantity + 1)}>+</button>
      </span>
      <span className="cart-row-price">
        ${(product.price * quantity).toFixed(2)}
      </span>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </li>
  );
}
