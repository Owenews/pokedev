import { useSearchParams } from "react-router-dom";
import Header from "../../../common/component/Header/Header";
import Footer from "../../../common/component/Footer/Footer";
import PokemonCard from "../../component/PokemonCard/PokemonCard";
import useSearchPokemon from "../../hook/useSearchPokemon";
import "./SearchResultPokemon.scss";

const SearchResultPokemon = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { searchPokemon, isLoading, error } = useSearchPokemon(query);

  if (isLoading) {
    return (
      <>
        <Header />
        <p className="loading-message">En cours de chargement...</p>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <p className="error-message">{error}</p>
        <Footer />
      </>
    );
  }

  if (!isLoading && searchPokemon.length === 0) {
    return (
      <>
        <Header />
        <p className="error-message">Aucun Pokémon trouvé pour &quot;{query}&quot;</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="search-results">
        <h2>Résultats de la recherche pour &quot;{query}&quot;</h2>
        <section className="search-results-section">
          {searchPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} /> // Utilisation du composant PokemonCard

          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SearchResultPokemon;
