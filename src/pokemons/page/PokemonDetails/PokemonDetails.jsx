import { useParams } from "react-router-dom";
import Header from "../../../common/component/Header/Header";
import Footer from "../../../common/component/Footer/Footer";
import useGetPokemonDetails from "../../hook/useGetPokemonDetails";
import "./PokemonDetails.scss";

const PokemonDetails = () => {
  const { name } = useParams();
  const { pokemon, loading, error } = useGetPokemonDetails(name); // Utilisation du hook

  // Vérification si le pokemon est chargé ou si une erreur s'est produite
  if (loading) {
    return (
      <div>
        <Header />
        <p>Chargement du Pokémon en cours... Veuillez patienter.</p>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <p>Une erreur est survenue: {error}</p>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      
      <section>
        <div className="pokemon">
          <article key={pokemon.id} className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} />

            {/* Statistiques */}
            <div>
              <h4>Statistiques</h4>
              <ul>
                <li><strong>HP:</strong> {pokemon.stats.HP}</li>
                <li><strong>Attaque:</strong> {pokemon.stats.attack}</li>
                <li><strong>Défense:</strong> {pokemon.stats.defense}</li>
                <li><strong>Attaque Spéciale:</strong> {pokemon.stats.special_attack}</li>
                <li><strong>Défense Spéciale:</strong> {pokemon.stats.special_defense}</li>
                <li><strong>Vitesse:</strong> {pokemon.stats.speed}</li>
              </ul>
            </div>

            {/* Types */}
            <div>
              <h4>Types</h4>
              <ul>
                {pokemon.apiTypes && pokemon.apiTypes.length > 0 ? (
                  pokemon.apiTypes.map((type) => (
                    <li key={type.name}>
                      <img src={type.image} alt={type.name} />
                      {type.name}
                    </li>
                  ))
                ) : (
                  <p>Aucun type disponible pour ce Pokémon.</p>
                )}
              </ul>
            </div>

            {/* Résistances */}
            <div>
              <h4>Résistances</h4>
              <ul>
                {pokemon.apiResistances && pokemon.apiResistances.length > 0 ? (
                  pokemon.apiResistances.map((resistance, index) => (
                    <li key={index}>
                      <strong>{resistance.name}:</strong> {resistance.damage_relation} ({resistance.damage_multiplier}x)
                    </li>
                  ))
                ) : (
                  <p>Aucune résistance disponible pour ce Pokémon.</p>
                )}
              </ul>
            </div>

            {/* Évolutions */}
            <div>
              <h4>Évolutions</h4>
              {pokemon.apiEvolutions && pokemon.apiEvolutions.length > 0 ? (
                <ul>
                  {pokemon.apiEvolutions.map((evolution) => (
                    <li key={evolution.name}>
                      {evolution.name} (Pokedex ID: {evolution.pokedexId})
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Aucune évolution trouvée pour ce Pokémon.</p>
              )}
            </div>
          </article>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default PokemonDetails;
