import { Outlet } from "react-router-dom";

export const TempLayout = () => {
  return (
    <div>
      <h1>Some Content from the layout</h1>
      <h2>Some more content from the layout </h2>
      <p>even more content from the layout</p>

      <Outlet />

      
      <footer>This is the footer content</footer>
    </div>
  );
};
