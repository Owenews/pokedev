import { useEffect, useState } from "react";

const PokemonTypes = () => {
  const [types, setTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchTypePokemons = async () => {
    const pokemonsTypeResponse = await fetch("https://pokebuildapi.fr/api/v1/types");
    const pokemonsTypeResponseData = await pokemonsTypeResponse.json();

    setTypes(pokemonsTypeResponseData.slice(0, 3));
    setIsLoading(false);
    setIsError(false);

    // Mélange les types aléatoirement et prend les 3 premiers
    const shuffledTypes = pokemonsTypeResponseData.sort(() => Math.random() - 0.5);
    setTypes(shuffledTypes.slice(0, 3)); // Met à jour les types de pokemons
  };

  useEffect(() => {
    fetchTypePokemons();
  }, []);

  const handleNewTypes = () => {
    fetchTypePokemons();
    console.log(fetchTypePokemons);
  };

  if (isLoading) {
    return <p>Types en cours de chargement</p>;
  }

  if (isError) {
    return <p>Il y a eu une erreur de chargement. Veuillez rafraichir la page</p>;
  }

  return (
    <section>
      <h2 className="pokemon-title">Types de Pokemons</h2>
      <button className= "pokemon-bouton" onClick={handleNewTypes}>Générer de nouveaux types aléatoires</button>
      {types?.map((type) => {
        return (
          <article key={type.id}>
            <p>{type.id}</p>
            <img src={type.image} alt={type.id} />
          </article>
        );
      })}
    </section>
  );
};

export default PokemonTypes;