import { useTodoContext } from "../context/TodoContext";

export function Footer() {
  const { todos, clearCompleted } = useTodoContext();
  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <footer className="footer">
      <span className="footer__note">
        {todos.length} item{todos.length === 1 ? "" : "s"}
      </span>
      <button
        className="btn btn--ghost"
        type="button"
        onClick={clearCompleted}
        disabled={completedCount === 0}
      >
        Clear completed
      </button>
    </footer>
  );
}
