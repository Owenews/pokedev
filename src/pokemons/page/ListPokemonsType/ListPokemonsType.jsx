import Header from "../../../common/component/Header/Header";
import Footer from "../../../common/component/Footer/Footer";
import { Link } from "react-router-dom";
import useGetListPokemonsType from "../../hook/useGetListPokemonsType";
import "./ListPokemonsType.scss";

const ListPokemonsType = () => {
  const { 
    pokemonsListType, 
    selectedType, 
    setSelectedType, 
    isLoading, 
    error 
  } = useGetListPokemonsType("Normal"); // Par défaut, charger le type "Normal"

  return (
    <>
      <Header />
      <section>
        <h2 className="pokemons-list-type">Liste des Pokémon par type</h2>

        {/* Sélecteur de type */}
        <div className="selector-container">
          <label htmlFor="pokemon-type">Choisir un type de Pokémon : </label>
          <select
            id="pokemon-type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="generation-select"
          >
            <option value="Normal">Normal</option>
            <option value="Combat">Combat</option>
            <option value="Vol">Vol</option>
            <option value="Poison">Poison</option>
            <option value="Sol">Sol</option>
            <option value="Roche">Roche</option>
            <option value="Insecte">Insecte</option>
            <option value="Spectre">Spectre</option>
            <option value="Acier">Acier</option>
            <option value="Feu">Feu</option>
            <option value="Eau">Eau</option>
            <option value="Plante">Plante</option>
            <option value="Électrik">Électrik</option>
            <option value="Psy">Psy</option>
            <option value="Glace">Glace</option>
            <option value="Dragon">Dragon</option>
            <option value="Fée">Fée</option>
          </select>
        </div>

        {/* Gestion des états de chargement et d'erreur */}
        {isLoading && <p>Chargement en cours...</p>}
        {error && <p>{error}</p>}

        {/* Liste des Pokémon */}
        <div className="pokemons-list">
          {pokemonsListType.length > 0 ? (
            <div className="pokemon-cards-container">
              {pokemonsListType.map((pokemon) => (
                <div key={pokemon.id} className="pokemon-card">
                  <h3 className="pokemon-name">{pokemon.name}</h3>
                  <Link to={`/pokemons-details/${pokemon.name}`}>
                    <button className="card-button">Voir les détails</button>
                  </Link>
                  <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                </div>
              ))}
            </div>
          ) : (
            <p>Aucun Pokémon trouvé pour le type sélectionné.</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ListPokemonsType;
