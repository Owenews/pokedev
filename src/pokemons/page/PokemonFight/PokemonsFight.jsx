import Header from "../../../common/component/Header/Header";
import Footer from "../../../common/component/Footer/Footer";
import usePokemonsFight from "../../hook/usePokemonsFight"; // Importation du hook
import "./PokemonsFight.scss"

const PokemonsFight = () => {
  const {
    randomPokemons,
    selectedTeam,
    wildPokemon,
    inputType,
    setInputType,
    addToTeam,
    fetchPokemonsByType,
  } = usePokemonsFight();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputType) {
      fetchPokemonsByType(inputType);
    }
  };

  return (
    <>
      <Header />
      <section className="pokemon-fight">
        <h1>Pokémon Fight</h1>

        {/* Formulaire pour sélectionner un type */}
        <form className="fight-form" onSubmit={handleFormSubmit}>
          <label htmlFor="type-input">Entrez un type de Pokémon :</label>
          <input
            id="type-input"
            type="text"
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            placeholder="ex : Feu, Eau, Plante..."
          />
          <button type="submit">Valider</button>
        </form>

        {/* Liste des Pokémon aléatoires */}
        <div className="random-pokemons-container">
          <h2>Pokémons aléatoires du type {inputType}</h2>
          {randomPokemons.map((pokemon) => (
            <div key={pokemon.id} onClick={() => addToTeam(pokemon)} className="pokemon-card">
              <p>{pokemon.name}</p>
              <img src={pokemon.image} alt={pokemon.name} />
            </div>
          ))}
        </div>

        {/* Équipe du joueur */}
        <div className="team">
          <h2>Votre équipe</h2>
          {selectedTeam.map((pokemon) => (
            <div key={pokemon.id} className="team-member">
              <p>{pokemon.name}</p>
              <img src={pokemon.image} alt={pokemon.name} />
              <ul>
                {Object.entries(pokemon.stats).map(([statName, value]) => (
                  <li key={statName}>
                    {statName}: {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pokémon sauvage */}
        {wildPokemon && (
          <div className="wild-pokemon">
            <h2>Un Pokémon sauvage est apparu !</h2>
            <p>{wildPokemon.name}</p>
            <img src={wildPokemon.image} alt={wildPokemon.name} />
            <ul>
              {Object.entries(wildPokemon.stats).map(([statName, value]) => (
                <li key={statName}>
                  {statName}: {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default PokemonsFight;
