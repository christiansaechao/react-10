interface CountControlsProps {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Writes only. Never sees `count`.
export default function CountControls({
  increment,
  decrement,
  reset,
}: CountControlsProps) {
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: 10, padding: 20 }}>
      <h2>Controls</h2>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
