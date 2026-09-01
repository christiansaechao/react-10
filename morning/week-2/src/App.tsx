import { useState } from "react";
import "./App.css";


// functionality and memory to your components
// 2 ways to trigger a rerender

// 1. updating state to another value
// 2. props values change

function App() {
  // variableName, setVariableName
  const [name, setName] = useState("joshua"); // persists during the user session | in-app memory

  // number (any number)
  // const [number, setNumber] = useState(21);

  // return (
  //   <div>
  //     {number}
  //     <button onClick={() => setNumber(30)}>Update number</button>/
  //   </div>
  // )

  // object (car)
  // { key: value }
  // const [car, setCar] = useState({
  //   model: "bmw",
  //   make: "firebird",
  //   year: 1990,
  // });

  // car = { model: "bmw", make: "firebird", year: 1990 }
  // car = { model: "lexus" }
  // spread operator ...

  // {...car}

  // return (
  //   <div>
  //     {car.model}
  //     <button onClick={() => setCar({ ...car, model: "lexus" })}>
  //       {" "}
  //       Change Model
  //     </button>
  //   </div>
  // );

  // array (fruits)
  const defaultValue = ["apple", "banana", "orange"];
  const [fruits, setFruits] = useState(defaultValue);

  const games = [
    { id: 1, name: "Skyrim" },
    { id: 2, name: "Baldurs Gate" },
    { id: 3, name: "Oblivion" },
  ];

  // fruits = "mango"
  // []

  return (
    <h1>
      {/* uniquely identifies each element */}
      {games.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
      <button
        onClick={() => {
          const old_fruits = fruits.slice(1); // bannana, orange
          setFruits(["mango", ...old_fruits]);
        }}
      >
        Update array's first element
      </button>
    </h1>
  );

  return (
    <div>
      {name}
      <button onClick={() => setName("adonis")}>Change Name</button>
    </div>
  );
}

export default App;

/**
 * Returns a new array
 * const people = []
 * map | singular of the plural (array)
 * array.map((person) => <PersonCard person={person} />)
 *
 * const new_array = [ele1, ele2]
 * array.filter((ele) => conditional)
 *
 * array.reduce((acc, curr) => {
 *
 * }, default_value);
 *
 */