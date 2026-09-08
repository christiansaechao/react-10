import { Outlet } from "react-router";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export function MainLayout() {
  return (
    <div className="layout layout--main">
      <Navbar />
      <main className="layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
