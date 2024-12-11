import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour effectuer une recherche de Pokémon
 * @param {string} query - Le terme de recherche (généralement extrait des paramètres d'URL)
 * @returns {Object} { searchPokemon, isLoading, error }
 */
const useSearchPokemon = (query) => {
  const [searchPokemon, setSearchPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setIsLoading(true);
      setError(null); // Reset error message
      try {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${query}`);
        const data = await response.json();

        if (data && data.name) {
          setSearchPokemon([data]); // Mettre le Pokémon dans un tableau
        } else {
          setSearchPokemon([]); // Si aucun Pokémon n'est trouvé, vider la liste
        }
      } catch (err) {
        setError("Erreur lors de la récupération du Pokémon");
        console.error("Erreur lors de la récupération du Pokémon:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchPokemon();
    }
  }, [query]); // Re-exécuter le hook quand le query change

  return { searchPokemon, isLoading, error };
};

export default useSearchPokemon;
