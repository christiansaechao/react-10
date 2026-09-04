
/*
Requirements:
- Input field to add a task
- Button to add task to a list
- Display list of tasks
- Bonus:
  - Delete a task
  - Mark task as completed
*/

/**
 * Page
 * TodoApplication
 * 
 * Components
 * Navbar | Notification Bell, User Profile Icon
 * Search Bar 
 * Input Field + Add button
 * Footer
 * 
 * useState
 * const [input, setInput] = useState<string>(); // text for input field
 * const [tasks, setTasks] = useState<[]>();
 * active (tasks) | derived value
 * 
 */


import { TodoNavbar } from "../components/todo/TodoNavbar"
import { SearchBar } from "../components/todo/SearchBar"
import { TodoFooter } from "../components/todo/TodoFooter"
import { InputField } from "../components/todo/InputField"
import { TodoList } from "../components/todo/TodoList"
import { useState } from "react";

export const Todo = () => {
    const [stuffTodo, setStuffTodo] = useState<string[]>([]); // stuffTodo = ["strings"]

    return (
        <div>
            <TodoNavbar />
            <SearchBar />
            <InputField stuffTodo={stuffTodo} setStuffTodo={setStuffTodo} />
            <TodoList tasks={stuffTodo} />
            <TodoFooter />
        </div>
    )
};