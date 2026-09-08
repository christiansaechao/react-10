import { useEffect, useState } from "react";
import "./App.css";

const api_url = "https://rickandmortyapi.com/api/";

/**
 * character
 * episode
 * location
 */

function App() {
  const [characters, setCharacters] = useState([]); // => where we fetch data,
  const [endpoint, setEndpoint] = useState("character");

  async function getData() {
    try {
      const { results } = await fetch(api_url + endpoint).then((res) =>
        res.json(),
      );

      setCharacters(results);
    } catch (err) {
      throw new Error("Couldn't fetch data from api: " + err);
    }
  }

  // empty [], call the function onload
  // runs one time on load
  // 3rd party, api (retrieving data)
  // connecting to a database / server
  // api (endpoint), websockets (bidirectional connectivity), ttl live connection

  useEffect(() => {
    getData();
  }, [endpoint]);

  return (
    <div>
      <h1>This is our current endpoint: {endpoint}</h1>
      <button onClick={() => setEndpoint("character")}>Character</button>
      <button onClick={() => setEndpoint("episode")}>Episode</button>
      <button onClick={() => setEndpoint("location")}>Location</button>
      {characters.map((character: any) => (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} />
        </div>
      ))}
    </div>
  );
}

export default App;