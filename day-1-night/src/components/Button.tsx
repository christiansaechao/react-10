/**
 * props: {
 *    buttonText: string
 * }
 */
// Hooks, lifecycel methods

import "./index.css";

type ButtonComponentType = {
  buttonText: string;
};

export const ButtonComponent = (props: ButtonComponentType) => {
  const ButtonClick = () => {
    alert("Button being clicked");
  }

  return (
    <>
      <button className="btn" onClick={ButtonClick}>{props.buttonText}</button>
    </>
  );
};
