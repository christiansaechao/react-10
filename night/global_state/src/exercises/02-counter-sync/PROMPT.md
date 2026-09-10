# Exercise 02 — Counter sync

## Scenario

A control card (`+1` / `-1` / `reset`) and a display card that shows the
live number. They're wrapped in a `StatsBar` that lays them out.

## Where the state is now

`CounterExercise.tsx` holds `count` plus `increment`, `decrement`, and
`reset`. It passes **all four** into `StatsBar`, which passes:

- `increment` / `decrement` / `reset` down to `CountControls`
- `count` down to `CountDisplay`

## The smell

`StatsBar` uses none of those four props. It names all of them, threads
them through its signature, and forwards them — pure plumbing. Every time
you add a prop to the counter you have to touch `StatsBar` too.

## Your task

Move `count` + the three updaters into a store / context. After the
refactor:

- `CountControls` calls `increment` / `decrement` / `reset` directly.
- `CountDisplay` reads `count` directly.
- `StatsBar` has **no props** — it just renders the two cards.
- `CounterExercise` has no `useState`.

## Hints

- `zustand`: one store `{ count, increment, decrement, reset }`. Each
  updater is `set((s) => ({ count: s.count + 1 }))` etc.
- Context: a provider holding the `useState` + a `useCounter()` hook.
- Notice `StatsBar` becomes a plain layout component — that's the win.

## Done when

- [ ] `StatsBar` takes no props.
- [ ] Buttons still change the number.
- [ ] `reset` still sets it back to 0.
