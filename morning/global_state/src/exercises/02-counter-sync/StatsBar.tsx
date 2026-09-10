import CountControls from "./CountControls";
import CountDisplay from "./CountDisplay";

interface StatsBarProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Pure pass-through. Every prop in this list exists only to reach a child.
// When the counter state goes global, this whole interface disappears and
// StatsBar becomes a plain layout wrapper.
export default function StatsBar({
  count,
  increment,
  decrement,
  reset,
}: StatsBarProps) {
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      <CountControls increment={increment} decrement={decrement} reset={reset} />
      <CountDisplay count={count} />
    </div>
  );
}
