import type { Todo } from "../types";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  emptyMessage?: string;
}

export function TodoList({ todos, emptyMessage = "Nothing here yet." }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="empty-state">{emptyMessage}</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
