// Create the Counter store here
// stores are just custom React Hooks
// set - setting (updating) the state

// { ...count, count + 1}

import { create } from "zustand";

type CounterType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounter = create<CounterType>((set) => (
    
    
    {
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set((_) => ({ count: 0 }))
    }


));