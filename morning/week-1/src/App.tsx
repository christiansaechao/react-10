import "./App.css";
import { RenderFruitList } from "./mapping/FruitList";
import { CapitalizeWords } from "./mapping/CapitalizeWords";
import { ConditionalRender } from "./mapping/ConditionalRender";
import { AdminsOnly } from "./filtering/AdminsOnly";
import { PriceGreaterThan20 } from "./filtering/PriceGreaterThan20";

function App() {
  
  return (
    <>
      <RenderFruitList />
      <CapitalizeWords />
      <ConditionalRender />
      <AdminsOnly />
      <PriceGreaterThan20 />
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
