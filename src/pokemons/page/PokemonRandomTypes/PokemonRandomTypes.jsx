import { Link } from "react-router-dom";
import useGetPokemonRandomTypes from "../../hook/useGetPokemonRandomTypes";
import "./PokemonRandomTypes.scss";

const PokemonRandomTypes = () => {
  const { types, loading, error, fetchTypePokemons } = useGetPokemonRandomTypes(); // Utilisation du hook

  const handleNewTypes = () => {
    fetchTypePokemons();
  };

  if (loading) {
    return (
      <main className="random-types-section">
        <h2 className="pokemon-title">Chargement des types...</h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className="random-types-section">
        <h2 className="pokemon-title">Erreur: {error}</h2>
      </main>
    );
  }

  return (
    <main className="random-types-section">
      <h2 className="pokemon-title">Types de Pokémons</h2>
      <div className="button-container">
        <button className="pokemon-bouton" onClick={handleNewTypes}>Générer de nouveaux types aléatoires</button>
      </div>
      <div className="types-container">
        {types?.map((type) => (
          <div key={type.id} className="pokemon-card">
            <h3 className="pokemon-id">ID: {type.id}</h3>
            <h4 className="pokemon-type">{type.name}</h4>
            <img src={type.image} alt={type.name} className="pokemon-image" />
            <div className="card-buttons">
              <Link to={"/list-type/"}><button className="card-button">Voir tous les types de Pokémon</button></Link>
              <Link to={`/pokemons-type/${type.name}`}><button className="card-button">Voir tous les pokémons de ce type</button></Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PokemonRandomTypes;
