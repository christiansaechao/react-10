import { TodoList } from "../../../../night/routing/src/components/TodoList";
import { useTodoContext } from "../context/TodoContext";

export function CompletedPage() {
  const { todos, clearCompleted } = useTodoContext();
  const completedTodos = todos.filter((t) => t.completed);

  return (
    <section className="page">
      <div className="page__header">
        <h1 className="page__title">Completed</h1>
        {completedTodos.length > 0 && (
          <button className="btn btn--ghost" type="button" onClick={clearCompleted}>
            Clear completed
          </button>
        )}
      </div>
      <TodoList todos={completedTodos} emptyMessage="Nothing completed yet." />
    </section>
  );
}
