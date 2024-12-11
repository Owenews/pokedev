/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./PokemonCard.scss"; // Assurez-vous d'avoir un fichier de style pour ce composant

 
const PokemonCard = ({ pokemon }) => {
  return (
    <div key={pokemon.id} className="pokemon-card">
      <h2 className="pokemon-title">{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
      <div className="card-buttons">
        <Link to={`/pokemons-details/${pokemon.name}`}>
          <button className="card-button">Voir les détails</button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
