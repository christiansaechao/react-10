import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { useTodoContext } from "../context/TodoContext";

export function AllTodosPage() {
  const { todos } = useTodoContext();

  return (
    <section className="page">
      <h1 className="page__title">All todos</h1>
      <TodoForm />
      <TodoList todos={todos} emptyMessage="No todos yet. Add one above." />
    </section>
  );
}
