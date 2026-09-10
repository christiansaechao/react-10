import { useState } from "react";
import { Routes, Route } from "react-router";
import type { CartLine, Product } from "./types";
import { PRODUCTS } from "./data/products";
import Header from "./components/Header";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import "./App.css";

// Category list for the filter bar, derived once from the product data.
const CATEGORIES = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

function App() {
  // ---------------------------------------------------------------------------
  // Every piece of shared state lives here, at the very top of the tree, and
  // is handed down through props level by level. There are THREE things to
  // pull out into a global store, in increasing order of pain:
  //
  //   1. searchQuery      -- set in Header, read in ProductList (siblings!)
  //   2. selectedCategory -- set in CategoryBar, read in ProductList
  //   3. cart (+handlers) -- set in ProductCard, read in Header & CartPage
  // ---------------------------------------------------------------------------

  // 1 ---------------------------------------------------------------------
  const [searchQuery, setSearchQuery] = useState("");

  // 2 ---------------------------------------------------------------------
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 3 ---------------------------------------------------------------------
  const [cart, setCart] = useState<CartLine[]>([]);

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((line) => line.product.id === product.id);
      if (existing) {
        return prev.map((line) =>
          line.product.id === product.id
            ? { ...line, quantity: line.quantity + 1 }
            : line,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }

  function removeFromCart(productId: string) {
    setCart((prev) => prev.filter((line) => line.product.id !== productId));
  }

  function setQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((line) =>
        line.product.id === productId ? { ...line, quantity } : line,
      ),
    );
  }

  const itemCount = cart.reduce((sum, line) => sum + line.quantity, 0);

  return (
    <div className="app">
      {/* itemCount + searchQuery drilled: App -> Header */}
      <Header
        itemCount={itemCount}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="content">
        <Routes>
          {/*
            App -> ProductsPage -> CategoryBar         (selectedCategory)
            App -> ProductsPage -> ProductList         (searchQuery, selectedCategory)
            App -> ProductsPage -> ProductList -> ProductCard  (addToCart)
          */}
          <Route
            path="/"
            element={
              <ProductsPage
                products={PRODUCTS}
                categories={CATEGORIES}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                searchQuery={searchQuery}
                onAddToCart={addToCart}
              />
            }
          />
          {/* cart + handlers drilled: App -> CartPage -> CartLineItem / CartSummary */}
          <Route
            path="/cart" 
            element={
              <CartPage
                cart={cart} //Setting the value of cart to {cart} (l31)
                onRemove={removeFromCart} //S
                onSetQuantity={setQuantity} // 
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
