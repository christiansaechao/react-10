interface CountDisplayProps {
  count: number;
}

// Reads only. Never sees the updaters.
export default function CountDisplay({ count }: CountDisplayProps) {
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: 10, padding: 20 }}>
      <h2>Live count</h2>
      <p style={{ fontSize: 48, fontWeight: 600, color: "var(--text-h)" }}>
        {count}
      </p>
    </div>
  );
}
