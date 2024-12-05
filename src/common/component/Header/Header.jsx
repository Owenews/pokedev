import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleSubmitSearch = (event) => {
      event.preventDefault();
      const query = event.target.query.value;
  
      navigate("/search-results?query=" + query);
    };

    return (
      <header>
          <a href="http://localhost:5173"><img className="logo-pokeball" src="https://www.pokebuild.xyz/logo192.png" alt="Logo pokeball" /></a>
        
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>

            <li>
              <Link to={"/pokemons-list"}>Pokemons</Link>
            </li>

            <li>
              <Link to={"/type-list"}>Types</Link>
            </li>

            <li>
              <Link to={"/pokemon-type-list"}>Pokemon Types</Link>
            </li>

            <li>
              <Link to={"random-pokemon"}>Random Pokemon</Link>
            </li>

            <li>
              <Link to={"pokemon-fight"}>Pokemon Fight</Link>
            </li>
          </ul>

          <form method="get" onSubmit={handleSubmitSearch}>
            <label>
               <input type="search" name="query" placeholder="Search for a meal" required />
            </label>

            <input type="submit" value="🔍"/>
          </form>
        </nav>
      </header>
    );
};

export default Header;