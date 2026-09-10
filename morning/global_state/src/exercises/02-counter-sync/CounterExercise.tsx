import { useState } from "react";
import StatsBar from "./StatsBar";

// Exercise 02 — a value AND its updaters, drilled through a component that
// uses neither.
//
// `count` + increment / decrement / reset are all created here and handed
// to <StatsBar>, which forwards every one of them, untouched, to its two
// children. <StatsBar> is pure plumbing — that's the smell to remove.
//
// Goal: move state + updaters into a store / context so <StatsBar> takes
// no props at all.
export default function CounterExercise() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((n) => n + 1);
  const decrement = () => setCount((n) => n - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ padding: 24 }}>
      <StatsBar
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    </div>
  );
}
