import { useCounter } from "../stores/useCounter";

export function Counter() {
  const { count, increment, decrement, reset } = useCounter((state) => state);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
