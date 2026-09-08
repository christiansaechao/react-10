import { Outlet } from "react-router";

interface CenteredLayoutProps {
  title?: string;
}

export function CenteredLayout({ title = "Todo" }: CenteredLayoutProps) {
  return (
    <div className="layout layout--centered">
      <div className="layout__card">
        <h1 className="layout__card-title">{title}</h1>
        <Outlet />
      </div>
    </div>
  );
}
