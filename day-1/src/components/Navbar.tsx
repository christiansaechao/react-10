import { NavbarDropdown } from "./NavbarDropdown";

export const Navbar = () => {
  return (
    <div>
      <NavbarDropdown name="Pokemon" />
      <NavbarDropdown name="Yu-Gi-Oh" />
      <NavbarDropdown
        name="Magic"
        options={["Heroes", "Secrets of Strixhaven", "TMNT"]}
      />
      <NavbarDropdown name="One Piece" />
    </div>
  );
};
