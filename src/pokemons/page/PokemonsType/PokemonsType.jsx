import { useParams } from "react-router-dom";
import Header from "../../../common/component/Header/Header";
import Footer from "../../../common/component/Footer/Footer";
import PokemonCard from "../../component/PokemonCard/PokemonCard";
import useGetPokemonsType from "../../hook/useGetPokemonsType";
import "./PokemonsType.scss";

const PokemonsType = () => {
  const { type } = useParams();
  const { pokemonsListType, loading, error } = useGetPokemonsType(type); // Utilisation du hook

  if (loading) {
    return (
      <>
        <Header />
        <section>
          <h2 className="pokemons-type">Chargement des pokémons...</h2>
        </section>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <section>
          <h2 className="pokemons-type">Erreur: {error}</h2>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section>
        <h2 className="pokemons-type">Tous les pokémons de type {type}</h2>
        <div className="pokemons-list">
          {/* Si la liste des pokémons est disponible, on map sur chaque élément et on utilise le composant PokemonCard */}
          {pokemonsListType.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} /> // Utilisation du composant PokemonCard
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PokemonsType;
