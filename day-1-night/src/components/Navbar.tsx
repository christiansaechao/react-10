import { ButtonComponent } from "./Button";

export const Navbar = () => {
  return (
    <div>
      <h2>CrunchyRoll</h2>
      <ButtonComponent buttonText="Log In" />
      <ButtonComponent buttonText="Start Free Trial" />
    </div>
  );
};
