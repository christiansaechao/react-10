import { useState, useEffect } from "react";

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

// const [variable_name, setterFunction] = useState();
// setNum(num + 1);

/**
 * setNum(num + 1) => 0 + 1, rerenders
 * setNum(num + 1) => 1 + 1, rerenders
 *
 *
 * 489028482408940 = ()
 *
 *
 * Ternary Operator | Conditional Rendering - render one thing or the other based on some condition
 * conditional ? truthy value : falsy value
 *
 *
 * "online" | "offline"
 *
 */

export default function SmartCounter() {
  const [num, setNum] = useState<number>(0);

  function decrementNumber() {
    if (num === 0) {
      return;
    } else {
      setNum(num - 1);
    }
  }

  return (
    <div>
      {/* CODE HERE */}
      {/* Counter: 1 */}
      <p>Counter: {num}</p>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <button onClick={decrementNumber}>-1</button>
      <button onClick={() => setNum(0)}>Reset to 0</button>
      <div>{num === 0 ? "You reached the limit" : ""}</div>
    </div>
  );
}
