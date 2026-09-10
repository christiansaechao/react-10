import type { Theme } from "./types";

interface ThemedPanelProps {
  theme: Theme;
}

// Only READS the theme. It has no relationship to <ThemeToggle> other than
// caring about the same value — which currently has to travel up to the
// parent and back down.
export default function ThemedPanel({ theme }: ThemedPanelProps) {
  const dark = theme === "dark";
  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: 20,
        background: dark ? "#16171d" : "#ffffff",
        color: dark ? "#f3f4f6" : "#08060d",
      }}
    >
      <h2>Preview</h2>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <p>{dark ? "🌙 dark surface" : "☀️ light surface"}</p>
    </div>
  );
}
