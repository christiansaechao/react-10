import { createContext, useContext, type ReactNode } from "react";
import { useTodos } from "../hooks/useTodos";

type TodoContextValue = ReturnType<typeof useTodos>;

const TodoContext = createContext<TodoContextValue | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const value = useTodos();
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTodoContext() {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error("useTodoContext must be used inside a <TodoProvider>");
  }
  return ctx;
}
