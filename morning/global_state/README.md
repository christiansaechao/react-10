# Global State — lesson scaffold

A tiny e-commerce outline (product list + shopping cart) built **entirely with
local component state and props**. There is no global store yet — that's the
exercise.

## Where the state lives

Everything sits in [`src/App.tsx`](src/App.tsx): `searchQuery`,
`selectedCategory`, and the `cart` array plus `addToCart`, `removeFromCart`,
and `setQuantity`. Nothing lower in the tree holds shared state.

## Three things to lift (one exercise each)

All three currently live in [`src/App.tsx`](src/App.tsx). Do them in order —
each is a bit more involved than the last.

### 1. `searchQuery` (a plain string)

- **Set by:** the `<input>` in [`Header`](src/components/Header.tsx)
- **Read by:** [`ProductList`](src/components/ProductList.tsx) (to filter)
- **Why global:** `Header` and `ProductList` are siblings under `App`. There's
  no parent to lift to except `App` itself.
- **Drill path:** `App → Header` (set) &nbsp;/&nbsp; `App → ProductsPage → ProductList` (read)

### 2. `selectedCategory` (a string from a fixed list)

- **Set by:** [`CategoryBar`](src/components/CategoryBar.tsx)
- **Read by:** [`ProductList`](src/components/ProductList.tsx) (to filter)
- **Why global:** `ProductsPage` holds both children but doesn't care about the
  value — it just forwards it.
- **Drill path:** `App → ProductsPage → CategoryBar` (set) &nbsp;/&nbsp; `App → ProductsPage → ProductList` (read)

### 3. `cart` + `addToCart` / `removeFromCart` / `setQuantity` (array + handlers)

- **Set by:** the button in [`ProductCard`](src/components/ProductCard.tsx),
  plus the controls in [`CartLineItem`](src/components/CartLineItem.tsx)
- **Read by:** [`Header`](src/components/Header.tsx) badge,
  [`CartPage`](src/pages/CartPage.tsx), [`CartSummary`](src/components/CartSummary.tsx)
- **Why global:** the deepest drill in the app, and the state + its updaters
  travel down four levels together.
- **Drill path:** `App → ProductsPage → ProductList → ProductCard`

`ProductsPage`, `ProductList`, and `CartPage` accept props they never use —
they only forward them. That's the smell each exercise removes.

## The refactor

Move each piece into a store (`zustand` is already installed) or a Context.
After exercise 3, `ProductCard` calls `useCart().addToCart` directly, `Header`
reads the count directly, and `ProductsPage` / `ProductList` drop every prop
they were only passing through.

## Run

```
npm install
npm run dev
```

---

## Original Vite template notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
