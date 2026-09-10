import { Link } from "react-router";

interface HeaderProps {
  // #3 cart: only needed so the badge can show a number.
  itemCount: number;
  // #1 search: the input lives HERE, but the filtering happens over in
  // ProductList. Header and ProductList are siblings under App, so the
  // only way to share this today is to lift it into App.
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function Header({
  itemCount,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        🛍️ MiniShop
      </Link>

      <input
        className="search"
        type="search"
        placeholder="Search products…"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <Link to="/cart" className="cart-link">
        Cart ({itemCount})
      </Link>
    </header>
  );
}
