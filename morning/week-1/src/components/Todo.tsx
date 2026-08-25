import React from "react";

type TodoType = {
  description: string;
  due_date: string;
};

export const Todo = (props: TodoType) => {
  return (
    <div>
      <p>{props.description}</p>
      <p>{props.due_date}</p>
    </div>
  );
};
