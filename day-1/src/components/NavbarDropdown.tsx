/**
 * props: {
 *  name: string,
 *  options: []strings
 * }
 */

type NavbarDropdownType = {
  name: string;
  options?: string[]
};

/**
 * string
 * integer/number
 * boolean
 * null
 * undefined
 * objects
 * arrays
 */

export const NavbarDropdown = (props: NavbarDropdownType) => {
  return (
    <>
      <h2>{props.name}</h2>
      <select>
        <option>Heroes</option>
        <option>Secrets of Strixhaven</option>
        <option>Teenage Mutant Ninja Turtles</option>
      </select>
    </>
  );
};