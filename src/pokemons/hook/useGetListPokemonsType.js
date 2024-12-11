/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

/**
 * Hook personnalisé pour récupérer les Pokémon par type
 * @param {string} type - Le type de Pokémon à récupérer (par défaut 'Normal')
 * @returns {Object} { pokemonsListType, selectedType, setSelectedType, isLoading, error }
 */
const useGetListPokemonsType = () => {
  const [pokemonsListType, setPokemonsListType] = useState([]);
  const [selectedType, setSelectedType] = useState("Normal"); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les Pokémon par type
  const fetchPokemonsListType = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${selectedType}`);
      const data = await response.json();
      setPokemonsListType(data);
    } catch (err) {
      setError("Erreur lors de la récupération des Pokémon");
      console.error("Erreur lors de la récupération des Pokémon :", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonsListType(selectedType);
  }, [selectedType]); // Recharger la liste lorsque le type sélectionné change

  return {
    pokemonsListType,
    selectedType,
    setSelectedType,
    isLoading,
    error,
  };
};

export default useGetListPokemonsType;
