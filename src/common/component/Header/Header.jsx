import { Link, useNavigate } from "react-router-dom";
import "./Hearder.scss"

const Header = () => {
    const navigate = useNavigate();

    const handleSubmitSearch = (event) => {
      event.preventDefault();
      const query = event.target.query.value;
  
      navigate("/search-results?query=" + query);
    };

    return (
      <header>
          <h1>Pokedev</h1>
          <a href="http://localhost:5173"><img className="logo-pokeball" src="src/assets/pokeball-logo.png" alt="Logo pokeball" /></a>
        
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/pokemons-list"}>Pokemons</Link>
            </li>

            <li>
              <Link to={"/list-type"}>Types</Link>
            </li>

            <li>
              <Link to={"/pokemons-type-list"}>Pokemon Types</Link>
            </li>

            <li>
              <Link to={"/random-pokemon"}>Random Pokemon</Link>
            </li>

            <li>
              <Link to={"/pokemon-fight"}>Pokemons Fight</Link>
            </li>
          </ul>
          <ul>
            <li>
          <form method="get" onSubmit={handleSubmitSearch}>
            <label>
               <input type="search" name="query" placeholder="Search for a pokemon" required />
            </label>

            <input type="submit" value="🔍"/>
          </form>
          </li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;