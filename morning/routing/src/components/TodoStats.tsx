import { useTodoContext } from "../context/TodoContext";
import { Badge } from "./Badge";

export function TodoStats() {
  const { todos } = useTodoContext();
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;

  return (
    <div className="todo-stats">
      <Badge tone="default">{total} total</Badge>
      <Badge tone="accent">{active} active</Badge>
      <Badge tone="success">{completed} done</Badge>
    </div>
  );
}
