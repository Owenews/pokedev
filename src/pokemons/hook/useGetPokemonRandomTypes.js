import { useState, useEffect } from "react";

const useGetPokemonRandomTypes = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les types de Pokémon
  const fetchTypePokemons = async () => {
    setLoading(true);
    setError(null);

    try {
      const pokemonsTypeResponse = await fetch("https://pokebuildapi.fr/api/v1/types");

      if (!pokemonsTypeResponse.ok) {
        throw new Error("Erreur lors de la récupération des types de Pokémon");
      }

      const pokemonsTypeResponseData = await pokemonsTypeResponse.json();

      // Mélange les types aléatoirement et prend les 3 premiers
      const shuffledTypes = pokemonsTypeResponseData.sort(() => Math.random() - 0.5).slice(0, 3);
      setTypes(shuffledTypes); // Met à jour les types de Pokémon
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTypePokemons();
  }, []);

  return { types, loading, error, fetchTypePokemons };
};

export default useGetPokemonRandomTypes;
