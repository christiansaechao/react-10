import { useState } from "react";

/*
Requirements:
- Display a count starting at 0
- Add buttons for:
  - Increment (+1)
  - Decrement (-1)
  - Reset to 0
- Prevent count from going below 0
- Show a message when count is 0 (e.g., "You reached the limit")
*/

// we need to rerender the page, using useState
// const [variable_name, setVariableName] = useState();

/**
 * click the button
 * if count < 0 | count = -1
 * setCount(0)
 * else count > 0
 * return;
 *
 *
 * condition ? "online" : "offline"
 *
 */

export default function SmartCounter() {
  const [count, setCount] = useState(0); // 1
  const [warningMessage, setWarningMessage] = useState("");

  function handleDecrementClick() {
    if (count === 0) {
      setWarningMessage("You reached the limit");
      return;
    }

    setCount(count - 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={handleDecrementClick}>
        Decrement
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
      <p>{warningMessage}</p>
      {count === 0 ? "" : <p>You reached the limit</p>}
      <p>{count === 0 ? "" : "You reached the limit"}</p>
    </div>
  );
}
