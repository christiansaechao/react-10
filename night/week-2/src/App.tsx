import { useState } from "react";
import SmartCounter from "./components/useState/Counter";
import "./App.css";
import CharacterCounter from "./components/useState/CharacterCountInput";

// useState, useEffect, useRef | optimization useMemo, useMemoize
// Rendering - displaying things in the browser/ui
// Re-Rendering - updating the browser/ui

/**
 * Triggering a rerender
 * 1. update state
 * 2. props updating in value
 */

const initial_value = localStorage.getItem("fruit");

function App() {
  // const [variable_name, setter_function] = useState();
  const [fruit, setFruit] = useState(initial_value || ""); // undefined => mango =>

  /**
   * 1st mount/render: fruit = "mango"
   * changing state causes: rerender
   * setFruit(kiwi)
   */

  const updateFruit = () => {
    setFruit("mango");
    localStorage.setItem("fruit", fruit);
  };

  return (
    <div>
      {/* <SmartCounter /> */}
      <CharacterCounter />
    </div>
  );
}

export default App;
