# Global State — practice exercises

Small, self-contained problems for practicing the "lift it into a store /
Context" refactor. **None of these touch the e-commerce app.** Each folder
is a tiny component tree with one piece of shared state that is currently
drilled through props.

Do them in order — each is a little harder than the last.

| #  | Folder             | Shared state                    | The pain                                                   |
|----|--------------------|---------------------------------|-----------------------------------------------------------|
| 01 | `01-theme-toggle`  | one string (`"light"`/`"dark"`) | set + read by **siblings** — nothing to lift to but the root |
| 02 | `02-counter-sync`  | a number + 3 updaters           | drilled through a middle component that **uses none of it** |
| 03 | `03-notifications` | an array + 2 updaters           | the deepest drill — a layout relays it to **three** far-apart leaves |

Every folder has a `PROMPT.md` with the task, hints, and a "done when"
checklist. The root component of each exercise is its default export.

## Running one

Import the exercise root into `App.tsx` (or `main.tsx`) and render it:

```tsx
import ThemeExercise from "./exercises/01-theme-toggle/ThemeExercise";

export default function App() {
  return <ThemeExercise />;
}
```

Swap the import for `02-counter-sync/CounterExercise` or
`03-notifications/NotificationsExercise` to work the others.

## The refactor

`zustand` is already installed. For each exercise, move the state + its
updaters out of the root component into either a Context (provider + a hook
that throws outside it) or a `zustand` store (`create()` + a `useX()` hook).
Afterwards the root renders its children with no props, and any middle
"plumbing" component loses its prop list entirely.
