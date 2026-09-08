import { NavLink, Outlet } from "react-router";
import { TodoStats } from "../TodoStats";

const links = [
  { to: "/", label: "All", end: true },
  { to: "/active-page", label: "Active", end: false },
  { to: "/completed-page", label: "Completed", end: false },
];

export function SidebarLayout() {
  return (
    <div className="layout layout--sidebar">
      <aside className="layout__sidebar">
        <span className="navbar__brand">Todo</span>
        <nav className="layout__sidebar-links">
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
        <TodoStats />
      </aside>
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  );
}
