import { AllTodosPage } from "../pages/AllTodosPage";
import { TodoProvider } from "../context/TodoContext";

export const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="app">
        <AllTodosPage />
      </div>
    </TodoProvider>
  );
};
