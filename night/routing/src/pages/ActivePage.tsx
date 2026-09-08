import { TodoList } from "../components/TodoList";
import { useTodoContext } from "../context/TodoContext";

export function ActivePage() {
  const { todos } = useTodoContext();
  const activeTodos = todos.filter((t) => !t.completed);

  return (
    <section className="page">
      <h1 className="page__title">Active</h1>
      <TodoList todos={activeTodos} emptyMessage="No active todos. Nice work!" />
    </section>
  );
}
