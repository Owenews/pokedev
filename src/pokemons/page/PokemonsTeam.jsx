import { useEffect, useState } from "react";



const PokemonsTeam = () => {
  const [pokemonsInTeam, setPokemonsInTeam] = useState([]);

  const fetchPokemonsInTeam = async () => {
    const pokemonsResponse = await fetch("https://pokebuildapi.fr/api/v1/random/team");
    const pokemonsResponseData = await pokemonsResponse.json();

    setPokemonsInTeam(pokemonsResponseData);
  };

  useEffect(() => {
    fetchPokemonsInTeam();
  }, []);

  const handleRecreateTeam = () => {
    fetchPokemonsInTeam();
    console.log(fetchPokemonsInTeam);
  };

  return (
    <section>
      <h2 className="pokemon-title">Team Pokemons</h2>
      <button onClick={handleRecreateTeam}>Créer une nouvelle team</button>
      {pokemonsInTeam.length > 0 ? (
        <>
          {pokemonsInTeam.map((pokemon) => {
            return (
              <article key={pokemon.id}>
                <p>{pokemon.name}</p>
                <img src={pokemon.image} alt={pokemon.name} />
              </article>
            );
          })}
        </>
      ) : (
        <p>Team en cours de création...</p>
      )}
    </section>
  );
};

export default PokemonsTeam;