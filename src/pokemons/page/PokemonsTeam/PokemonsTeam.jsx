import { Link } from "react-router-dom";
import useGetPokemonsTeam from "../../hook/useGetPokemonsTeam";
import "./PokemonsTeam.scss";

const PokemonsTeam = () => {
  const { pokemonsInTeam, loading, error, fetchPokemonsInTeam } = useGetPokemonsTeam(); // Utilisation du hook

  const handleRecreateTeam = () => {
    fetchPokemonsInTeam();
  };

  if (loading) {
    return (
      <main className="team-section">
        <h2 className="pokemon-title">Chargement ton équipe...</h2>
      </main>
    );
  }

  if (error) {
    return (
      <main className="team-section">
        <h2 className="pokemon-title">Erreur: {error}</h2>
      </main>
    );
  }

  return (
    <main className="team-section">
      <h2 className="pokemon-title">Team Pokemons</h2>
      <div className="button-container">
        <button className="pokemon-bouton" onClick={handleRecreateTeam}>Créer une nouvelle team</button>
      </div>
      {pokemonsInTeam.length > 0 ? (
        <div className="pokemons-cards-container">
          {pokemonsInTeam.map((pokemon) => {
            return (
              <div key={pokemon.id} className="pokemon-card">
                <h3 className="pokemon-name">{pokemon.name}</h3>
                <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                <div className="card-buttons">
                  <Link to={`/pokemons-list/`}><button className="card-button">Voir tous les pokémons</button></Link>
                  <Link to={`/pokemons-details/${pokemon.name}`}><button className="card-button">Voir les détails</button></Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Team en cours de création...</p>
      )}
    </main>
  );
};

export default PokemonsTeam;
