import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import { TodoApp } from "./pages/TodoApp";
import { ActivePage } from "./pages/ActivePage";
import { CompletedPage } from "./pages/CompletedPage";
import { Navbar } from "./components/Navbar";
import { TempLayout } from "./Layouts/TempLayout";

function App() {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<TempLayout />}>
              <Route path="/" element={<TodoApp />} />
              <Route path="active" element={<ActivePage />} />
              <Route path="completed-page" element={<CompletedPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </>
  );
}

export default App;
