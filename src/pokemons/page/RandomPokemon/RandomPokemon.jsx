import Header from "../../../common/component/Header/Header";
import Footer from "../../../common/component/Footer/Footer";
import useGetRandomPokemon from "../../hook/useGetRandomPokemon";
import PokemonCard from "../../component/PokemonCard/PokemonCard";
import "./RandomPokemon.scss";

const RandomPokemon = () => {
  const { pokemonRandom, fetchRandomPokemon } = useGetRandomPokemon();

  return (
    <>
      <Header />
      <main className="random-pokemon-section">
        <div className="button-container">
          <button className="pokemon-bouton" onClick={fetchRandomPokemon}>
            Générer un nouveau Pokémon aléatoire
          </button>
        </div>
        {pokemonRandom?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} /> // Utilisation du composant PokemonCard
        ))}
      </main>
      <Footer />
    </>
  );
};

export default RandomPokemon;
