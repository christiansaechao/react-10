import type { Todo } from "../types";
import { useTodoContext } from "../context/TodoContext";

export function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, removeTodo } = useTodoContext();

  return (
    <li className={`todo-item${todo.completed ? " is-completed" : ""}`}>
      <label className="todo-item__main">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="todo-item__text">{todo.text}</span>
      </label>
      <button
        className="btn btn--ghost"
        type="button"
        onClick={() => removeTodo(todo.id)}
        aria-label={`Delete "${todo.text}"`}
      >
        &times;
      </button>
    </li>
  );
}
