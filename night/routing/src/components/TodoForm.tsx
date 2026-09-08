import { useState, type FormEvent } from "react";
import { useTodoContext } from "../context/TodoContext";

export function TodoForm() {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="New todo"
      />
      <button className="btn" type="submit" disabled={!text.trim()}>
        Add
      </button>
    </form>
  );
}
