import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { TodoProvider } from "./context/TodoContext";

import { ActivePage } from "./pages/ActivePage.tsx";
import { CompletedPage } from "./pages/CompletedPage.tsx";

import { Navbar } from "../../../night/routing/src/components/Navbar.tsx";
import { TempLayout } from "../../../night/routing/src/Layouts/TempLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/active-page" element={<ActivePage />} />
          <Route path="/completed-page" element={<CompletedPage />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  </StrictMode>,
);

/**
 * https://www.apple.com/
 * http://localhost:5173/
 * path: how we get to that page ("/")
 * element: this is the component that's being rendered
 */
