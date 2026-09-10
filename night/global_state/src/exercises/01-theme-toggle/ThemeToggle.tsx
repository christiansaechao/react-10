import type { Theme } from "./types";

interface ThemeToggleProps {
  theme: Theme;
  onChange: (next: Theme) => void;
}

// Only WRITES the theme (it reads the current value just to show which
// state the switch is in). Has no connection to <ThemedPanel>.
export default function ThemeToggle({ theme, onChange }: ThemeToggleProps) {
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: 10, padding: 20 }}>
      <h2>Settings</h2>
      <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => onChange(e.target.checked ? "dark" : "light")}
        />
        Dark mode
      </label>
    </div>
  );
}
