import { useState, useEffect } from "react";

const useGetPokemonsType = (type) => {
  const [pokemonsListType, setPokemonsListType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemonsListType = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des pokémons de ce type");
      }

      const data = await response.json();
      setPokemonsListType(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (type) {
      fetchPokemonsListType();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return { pokemonsListType, loading, error };
};

export default useGetPokemonsType;
