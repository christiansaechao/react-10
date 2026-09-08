import { NavLink } from "react-router-dom";
import { useTodoContext } from "../context/TodoContext";

const links = [
  { to: "/", label: "All", end: true },
  { to: "/active", label: "Active", end: false },
  { to: "/completed-page", label: "Completed", end: false },
];

const subjects = [
  { id: 1, subject_name: "Sciene", description: "The basics of science" },
  { id: 1, subject_name: "Math", description: "The basics of science" },
  { id: 1, subject_name: "History", description: "The basics of science" },
  { id: 1, subject_name: "Art", description: "The basics of science" },
];

export function Navbar() {
  const { todos } = useTodoContext();
  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <header className="navbar">
      <span className="navbar__brand">Todo</span>
      <nav className="navbar__links">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `navbar__link${isActive ? " is-active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <span className="navbar__count">{activeCount} left</span>
    </header>
  );
}
