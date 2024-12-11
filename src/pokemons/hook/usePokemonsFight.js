import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour gérer la logique du combat de Pokémon
 * @returns {Object} { randomPokemons, selectedTeam, wildPokemon, isBattleActive, inputType, setInputType, addToTeam, fetchPokemonsByType, spawnWildPokemon, determineWinner }
 */
const usePokemonsFight = () => {
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState([]);
  const [wildPokemon, setWildPokemon] = useState(null);
  const [isBattleActive, setIsBattleActive] = useState(false);
  const [inputType, setInputType] = useState("");

  // Fonction pour récupérer les Pokémon par type
  const fetchPokemonsByType = async (type) => {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
    const data = await response.json();
    const shuffled = data.sort(() => Math.random() - 0.5).slice(0, 10);
    setRandomPokemons(shuffled);
  };

  // Fonction pour ajouter un Pokémon à l'équipe
  const addToTeam = (pokemon) => {
    if (selectedTeam.length < 6) {
      setSelectedTeam([...selectedTeam, pokemon]);
    } else {
      alert("Votre équipe est déjà complète !");
    }
  };

  // Fonction pour générer un Pokémon sauvage
  const spawnWildPokemon = async () => {
    const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
    const data = await response.json();
    const randomPokemon = data[Math.floor(Math.random() * data.length)];
    setWildPokemon(randomPokemon);
    alert(`Un ${randomPokemon.name} sauvage est apparu !`);
    setIsBattleActive(true);
  };

  // Déterminer le vainqueur du combat
  const determineWinner = (teamPokemon, wildPokemon) => {
    {/* acc stocke la valeur calculée à chaque itération (Par défaut 0 au début) */} 
    {/* stat correspond à toute les statistiques du Pokémon (par exemple, HP, Attaque, Défense, etc.) */}

    const teamScore = Object.values(teamPokemon.stats).reduce((acc, stat) => acc + stat, 0); // .reduce() additionne les valeurs de l'objet dans le tableau
    const wildScore = Object.values(wildPokemon.stats).reduce((acc, stat) => acc + stat, 0);
    return teamScore >= wildScore
      ? `Votre ${teamPokemon.name} a gagné !`
      : `Le ${wildPokemon.name} sauvage a gagné !`;
  };

  useEffect(() => {
    if (selectedTeam.length > 0) {
      const timer = setTimeout(() => {
        spawnWildPokemon();
      }, Math.random() * (10000 - 3000) + 3000); // Pokémon sauvage apparaissant entre 3 et 10 secondes après l'ajout à l'équipe
      return () => clearTimeout(timer);
    }
  }, [selectedTeam]);

  // Gérer la fin du combat
  useEffect(() => {
    if (isBattleActive && wildPokemon && selectedTeam.length > 0) {
      const timer = setTimeout(() => {
        const teamPokemon = selectedTeam[0]; // Utilisation du premier Pokémon de l'équipe
        const winner = determineWinner(teamPokemon, wildPokemon);
        alert(`Combat terminé : ${winner}`);
        setIsBattleActive(false);
        setWildPokemon(null);
      }, 5000); // 5 secondes après l'apparition du Pokémon sauvage
      return () => clearTimeout(timer);
    }
  }, [isBattleActive, wildPokemon]);

  return {
    randomPokemons,
    selectedTeam,
    wildPokemon,
    isBattleActive,
    inputType,
    setInputType,
    addToTeam,
    fetchPokemonsByType,
    spawnWildPokemon,
    determineWinner
  };
};

export default usePokemonsFight;
