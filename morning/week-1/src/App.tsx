import { useState, useEffect } from "react";
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
        <SearchSimulation searchTerm={"React"}/>
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
