import { useState } from "react";


type TodoListProps = {
  tasks: string[]
}

export const TodoList = ({ tasks }: TodoListProps) => {
  return <div>
    <ul>
      {tasks.map((stuff) => <li>{stuff}</li>)}
    </ul>
  </div>;
}
