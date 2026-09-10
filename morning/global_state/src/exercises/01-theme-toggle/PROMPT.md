# Exercise 01 — Theme toggle

## Scenario

A settings panel and a preview panel sit side by side. The settings panel
flips a `theme` between `"light"` and `"dark"`; the preview panel renders
itself according to that theme.

## Where the state is now

`ThemeExercise.tsx` holds `const [theme, setTheme] = useState(...)` and
passes:

- `theme` + `onChange` down to `ThemeToggle` (the setter)
- `theme` down to `ThemedPanel` (the reader)

## The smell

`ThemeToggle` and `ThemedPanel` are **siblings**. They have no relationship
except a value they both care about. The only place that value can live
today is their common parent, so the parent is forced to own state it
doesn't use.

## Your task

Get `theme` out of `ThemeExercise`. After the refactor:

- `ThemeToggle` reads + writes the theme directly (store hook or context).
- `ThemedPanel` reads the theme directly.
- `ThemeExercise` renders both children with **no props**.

## Hints

- `zustand`: `create<{ theme: Theme; toggle: () => void }>()(...)`.
- Context: a `ThemeProvider` wrapping both children + a `useTheme()` hook.
- The `Theme` type is in `types.ts` — keep using it.

## Done when

- [ ] `ThemeExercise` has no `useState` and passes no props.
- [ ] Flipping the toggle still updates the preview.
- [ ] Neither child imports the other.
