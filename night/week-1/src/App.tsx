import "./App.css";
import { RenderFruitList } from "./mapping/FruitList";
import { RenderFromData } from "./mapping/RenderFromData";
import { ConditionalRender } from "./mapping/ConditionalRender";
import { AdminsOnly } from "./filtering/AdminsOnly";
import { MultipleConditions } from "./filtering/MultipleConditions";

function App() {
  return (
    <>
      <RenderFruitList />
      <RenderFromData />
      <ConditionalRender />
      <AdminsOnly />
      <MultipleConditions />
    </>
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
