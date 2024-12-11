import { useEffect, useState } from "react";

/**
 * Hook personnalisé pour récupérer la liste des Pokémon par génération
 * @returns {Object} { pokemonList, selectedGeneration, setSelectedGeneration, isLoading, error }
 */
const useGetPokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedGeneration, setSelectedGeneration] = useState("1"); // Génération par défaut
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les Pokémon par génération
  const fetchPokemonListByGeneration = async (generation) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/${generation}`);
      const data = await response.json();
      setPokemonList(data);
    } catch (err) {
      setError("Erreur lors de la récupération des Pokémon");
      console.error("Erreur lors de la récupération des Pokémon :", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonListByGeneration(selectedGeneration);
  }, [selectedGeneration]); // Recharger la liste lorsque la génération sélectionnée change

  return {
    pokemonList,
    selectedGeneration,
    setSelectedGeneration,
    isLoading,
    error,
  };
};

export default useGetPokemons;
