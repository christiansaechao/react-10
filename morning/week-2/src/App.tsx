import { useState, useEffect } from "react";
import "./App.css";

const api_url = "https://rickandmortyapi.com/api/";

/**
 * api endpoints
 * 1. character
 * 2. episodes
 * 3. locations
 */

function App() {
  const [characters, setCharacters] = useState([]); // undefined => [] = [{ rick and morty characters }];
  const [endpoint, setEndpoint] = useState("episode");
  const newValue = 15;

  async function getAPIData() {
    try {
      const { results } = await fetch(api_url + endpoint).then((res) =>
        res.json(),
      ); // how much time does this take? .00001ms (this returns the response from that server (api));
      setCharacters(results);
    } catch (err) {
      throw new Error(
        "There was an error trying to fetch Rick and Morty Charcters: " + err,
      );
    }
  }

  useEffect(() => {
    getAPIData();
    alert("running");
  }, [endpoint, newValue]); // paramters 1. callback function, 2. array

  // 1. empty | on component mount, call the function, runs on start
  // 2. variable/value for the useEffect to listen for, to run the function

  return (
    <div>
      {/* conditional rendering */}
      <button onClick={() => setEndpoint("character")}>Character</button>
      <button onClick={() => setEndpoint("episode")}>Episode</button>
      <button onClick={() => setEndpoint("location")}>Location</button>
      {characters.map((character: any) => (
        <div>
          <h1>{character.name}</h1> <img src={character.image} />
        </div>
      ))}
    </div>
  );
}

export default App;

// asynchronous vs synchronous

/**
 * 1. the component loads in
 * 2. api_url || undefined
 * 3. api_url = "https:"
 * 4. defining the function
 */
