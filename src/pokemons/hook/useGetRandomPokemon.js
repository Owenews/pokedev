import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour récupérer un Pokémon aléatoire
 * @returns {Object} { pokemonRandom, fetchRandomPokemon }
 */
const useGetRandomPokemon = () => {
  const [pokemonRandom, setPokemonRandom] = useState([]);

  // Fonction pour récupérer un Pokémon aléatoire
  const fetchRandomPokemon = async () => {
    try {
      const pokemonResponse = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
      const pokemonsResponseData = await pokemonResponse.json();

      // Mélange les pokémons aléatoirement et prend le premier pokémon
      const shuffledPokemons = pokemonsResponseData.sort(() => Math.random() - 0.5).slice(0, 1);
      setPokemonRandom(shuffledPokemons); // Met à jour le pokémon
    } catch (error) {
      console.error("Erreur lors de la récupération du Pokémon :", error);
    }
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []); // Appel de la fonction au montage du composant

  return { pokemonRandom, fetchRandomPokemon };
};

export default useGetRandomPokemon;
