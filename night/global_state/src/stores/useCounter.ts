import { create } from "zustand";

// this is a custom hook from zustand
// the rules applied to hooks also apply to this custom hook from "React"
// Everything is an object in Javascript

type State = {
  count: number;
};

type Actions = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounter = create<State & Actions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set((state) => ({ count: (state.count = 0) })),
}));
