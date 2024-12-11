import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour récupérer la liste des types de Pokémon
 * @returns {Object} { listTypes, isLoading, error }
 */
const useGetListTypes = () => {
  const [listTypes, setListTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les types de Pokémon
  const fetchTypes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://pokebuildapi.fr/api/v1/types");
      const data = await response.json();
      setListTypes(data);
    } catch (err) {
      setError("Erreur lors de la récupération des types de Pokémon");
      console.error("Erreur lors de la récupération des types de Pokémon :", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []); // Ce hook s'exécute uniquement au montage du composant

  return { listTypes, isLoading, error };
};

export default useGetListTypes;
