import { createContext, useContext, useEffect, useState } from "react";

const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
  const [region, setRegion] = useState({});
  const [page, setPage] = useState('region');
  const [grassType, setGrassType] = useState([])
  const [fireType, setFireType] = useState([]);
  const [waterType, setWaterType] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [fetchedPokemon, setFetchedPokemon] = useState({})
  const API = `https://pokeapi.co/api/v2/pokemon`;
  const regions = [
    {
      id: 1,
      name: "Kanto",
      endpoint: `?offset=0&limit=9`,
    },
    {
      id: 2,
      name: "Johto",
      endpoint: `?offset=151&limit=9`,
    },
    {
      id: 3,
      name: "Hoenn",
      endpoint: `?offset=251&limit=9`,
    },
  ];

  const setTypes = (starters) => {
    setGrassType(starters.slice(0, 3))
    setFireType(starters.slice(3, 6))
    setWaterType(starters.slice(6, 9))
  }
  

  useEffect(() => {
    const fetchStarters = async () => {
      if (region.id) {
        const response = await fetch(API + region.endpoint);
        const pokeData = await response.json();
        const regionStarters = pokeData.results;
        setTypes(regionStarters);
        setPage('starters');
      }
    }
    fetchStarters();
  }, [region])

  useEffect(() => {
    const init = async () => {
      await fetchSelectedPokemon();
    }
    const fetchSelectedPokemon = async () => {
      if (selectedPokemon.name) {
        const response = await fetch(selectedPokemon.url);
        const pokemonData = await response.json();
        setFetchedPokemon(pokemonData);
        setPage('pokemon')
      }
    }
    init();
  }, [selectedPokemon])

  const upperCaseName = (name) => {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
  }

  const value = {
    regions,
    page,
    region,
    grassType,
    fireType,
    waterType,
    fetchedPokemon,
    setRegion,
    setSelectedPokemon,
    upperCaseName
  }
  
  return <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>
}

export const usePokedex = () => {
  const context = useContext(PokedexContext)
  if (!context) {
    throw new Error("Must have access to PokedexProvider")
  }
  return context;
}