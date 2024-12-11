import Header from "../../../common/component/Header/Header";
import Footer from "../../../common/component/Footer/Footer";
import { Link } from "react-router-dom";
import useGetPokemons from "../../hook/useGetPokemons";
import "./ListPokemons.scss";

const ListPokemons = () => {
  const { pokemonList, selectedGeneration, setSelectedGeneration, isLoading, error } = useGetPokemons();

  return (
    <>
      <Header />
      <section className="pokemon-list-generation">
        <h2 className="pokemon-list-title">Liste des Pokémon par génération</h2>

        {/* Sélecteur de génération */}
        <div className="generation-selector">
          <label htmlFor="pokemon-generation">Choisir une génération : </label>
          <select
            id="pokemon-generation"
            value={selectedGeneration}
            onChange={(e) => setSelectedGeneration(e.target.value)}
            className="generation-select"
          >
            <option value="1">1ère génération</option>
            <option value="2">2ème génération</option>
            <option value="3">3ème génération</option>
            <option value="4">4ème génération</option>
            <option value="5">5ème génération</option>
            <option value="6">6ème génération</option>
            <option value="7">7ème génération</option>
            <option value="8">8ème génération</option>
          </select>
        </div>

        {/* Gestion des états de chargement et d'erreur */}
        {isLoading && <p>Chargement en cours...</p>}
        {error && <p>{error}</p>}

        {/* Liste des Pokémon */}
        <div className="pokemon-list">
          {pokemonList.length > 0 ? (
            <div className="pokemon-cards-container">
              {pokemonList.map((pokemon) => (
                <div key={pokemon.id} className="pokemon-card">
                  <h3 className="pokemon-name">{pokemon.name}</h3>
                  <img src={pokemon.sprite} alt={pokemon.name} className="pokemon-image" />
                  <div className="pokemon-info">
                    <p><strong>Slug:</strong> {pokemon.slug}</p>
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
                  <div className="pokemon-types">
                    <h4>Types</h4>
                    <ul>
                      {pokemon.apiTypes.map((type) => (
                        <li key={type.name}>
                          <img src={type.image} alt={type.name} />
                          {type.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/pokemons-details/${pokemon.name}`} className="card-button">Voir les détails</Link>
                </div>
              ))}
            </div>
          ) : (
            <p>Aucun Pokémon trouvé pour la génération sélectionnée.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ListPokemons;
