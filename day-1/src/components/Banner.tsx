// create a variable that's storing a function | arrow syntax
// WCAG compliance
import "./index.css";

export const Banner = () => {
  const location = "Canada";

  return (
    <div className="banner-container">
      <h3>TCG Player</h3>
      <p>Shipping to {location}</p>

      {/* Input Bar */}
      <section className="search-bar">
        <select>
          <option>Yu-Gi-Oh!</option>
          <option>One Piece</option>
          <option>Magic</option>
          <option>Pokemon</option>
        </select>
        <input type="text" placeholder="..." />
        <div>Search Icon</div>
      </section>
      
      <button className="">Sign In</button>
      <button>User Icon</button>
      <button>Shopping Cart</button>
    </div>
  );
};
