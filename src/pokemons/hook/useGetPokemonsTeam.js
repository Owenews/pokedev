import { useState, useEffect } from "react";

const useGetPokemonsTeam = () => {
  const [pokemonsInTeam, setPokemonsInTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemonsInTeam = async () => {
    setLoading(true);
    setError(null);

    try {
      const pokemonsResponse = await fetch("https://pokebuildapi.fr/api/v1/random/team");

      if (!pokemonsResponse.ok) {
        throw new Error("Erreur lors de la récupération des Pokémon pour l'équipe");
      }

      const pokemonsResponseData = await pokemonsResponse.json();
      setPokemonsInTeam(pokemonsResponseData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonsInTeam();
  }, []);

  return { pokemonsInTeam, loading, error, fetchPokemonsInTeam };
};

export default useGetPokemonsTeam;
