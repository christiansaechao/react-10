import { useState, useEffect, type ReactEventHandler } from "react";
import { PokemonCard } from "./components/PokemonCard";
import { SearchSimulation } from "./filtering/SearchSimulation";

import "./App.css";

// ----    domain---- /api/v2 - endpoint
// query = filtering parameters
// shoes amazon.com?size=10&color=red&brand=nike
// https://pokeapi.co/api/v2/?limit=10

const api_url = "https://pokeapi.co/api/v2/pokemon?limit=10";

type PokemonCardType = {
  name: string;
  url: string;
};

function App() {
  const [data, setData] = useState<PokemonCardType[]>(); // no data
  const isLoading = false;
  const fetchingData = 12;

  // does take some time to get data
  async function getData() {
    try {
      const response = await fetch(api_url).then((res) => res.json()); // json => javascript
      setData(response.results);
      console.log(response);
    } catch (err) {
      throw new Error(err + "");
    }
  }

  useEffect(() => {
    getData();
  }, [isLoading, fetchingData]);

  /**
   * no dependency array: run every rerender (every time the component comes into view, or changes)
   * empty []: calls the function on mount (when the app loads for the first time)
   * with dependencies in array: [isLoading, fetchingData]
   */

  return (
    <>
      {data &&
        data.map((pokemon) => (
          <PokemonCard name={pokemon.name} url={pokemon.url} />
        ))}
      <SearchSimulation searchTerm={"React"} />
    </>
  );
}

export default App;

/**
 * array methods: 3 higher order functions
 * filter, map, reduce
 *
 * filter returns items into a new array
 * [].filter(() => conditional | return true or false)
 *
 * map returns every item into a new array
 * [].map(() => )
 *
 * reduce, can do everything
 * [].reduce((acc, curr) => {}, starting value)
 */

/**
 * HTML File is importing in this script file
 * <body>
 *    <all of our UI/HTML goes here />
 *    <input id="todo-input" type="todo" placeholder="So enter a new todo..."></input>
 * </body>
 * <script src="script.js"></script>
 */

// script.js
const input = document.getElementById("todo-input"); // this part is getting this HTML element from the browser

let todo = input.value; // "testing", Grabbing that value from the browser

localStorage.setItem("todo-list", todo);

// React, built on top of regular JS, HTML, CSS

export const TodoApp = () => {
  const [input, setInput] = useState("a"); // going to store whatever someone types into the input box
  const [displayName, setDisplayName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    setDisplayName(e.target.value);
    const { response } = await fetch("https://api.mattsserver.app", {
      method: "POST",
      body: { formValue },
    }); // going to the server, and storing your information

    /**
     * 1. we have all this user information already
     * 2. load it in from the database
     */

    setInput("");
  };

  // Database
  // database, storing information based on that profile, how far it leans back, the height
  //

  // separate funciton that checks if this user exists in the database
  // if it exists load their data from the database

  // signing up for an application => sends (first_name, last_name, email, password)
  // setDisplayName(e.target.value.first_name + e.target.value.last_name)

  /**
   * submit a form => server (computers, cost money, process it and costs electricity) => updates in a database (persisting data) another computer that stores everything
   * just use the values from the inputs instead (client process, client side stuff)
   */

  return (
    <>
      <form onChange={handleSubmitForm}>
        <input
          id="first-name"
          type="text"
          placeholder="Enter a new todo..."
          value={input}
          onChange={handleChange}
        />
        <input
          id="last-name"
          type="text"
          placeholder="Enter a new todo..."
          value={input}
          onChange={handleChange}
        />
        <input
          id="email"
          type="text"
          placeholder="Enter a new todo..."
          value={input}
          onChange={handleChange}
        />
        <input
          id="password"
          type="text"
          placeholder="Enter a new todo..."
          value={input}
          onChange={handleChange}
        />
      </form>

      <div>{displayName}</div>
    </>
  );
};

/**
 * Event Listener => input | onChange, onClick, onKeyDown, onKeyUp
 * a
 * 1. set up our state | keeps track of something (input text), setInput updates the input text, and triggers a rerender every time type something
 */
