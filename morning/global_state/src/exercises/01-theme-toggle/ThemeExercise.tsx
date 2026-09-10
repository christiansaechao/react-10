import { useState } from "react";
import type { Theme } from "./types";
import ThemeToggle from "./ThemeToggle";
import ThemedPanel from "./ThemedPanel";

// Exercise 01 — sharing one value between SIBLINGS.
//
// `theme` is written by <ThemeToggle> and read by <ThemedPanel>. They sit
// next to each other under this component, so today the value has to live
// here and be handed to BOTH children as props. This component doesn't
// actually care about the theme itself.
//
// Goal: move `theme` into a store / context so the children reach it
// directly and this component renders them with no props.
export default function ThemeExercise() {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <section style={{ display: "flex", gap: 20, flexWrap: "wrap", padding: 24 }}>
      <ThemeToggle theme={theme} onChange={setTheme} />
      <ThemedPanel theme={theme} />
    </section>
  );
}
