import "./App.css";
import { SearchSimulation } from "./filtering/SearchSimulation";

function App() {
  return (
    <div>
      <SearchSimulation searchTerm="React" />
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
