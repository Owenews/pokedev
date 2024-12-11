import { useState, useEffect } from "react";

const useGetPokemonDetails = (name) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${name}`);
        
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données du Pokémon");
        }

        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return { pokemon, loading, error };
};

export default useGetPokemonDetails;
