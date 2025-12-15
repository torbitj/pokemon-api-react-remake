import { createContext, useContext, useEffect, useState } from "react";

const PokedexContext = createContext();

export const PokedexProvider = ({ children }) => {
  const [region, setRegion] = useState({});
  const [page, setPage] = useState('region');
  const [starters, setStarters] = useState([])
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
  
  const getStarters = () => {
    useEffect(() => {
      const starters = async () => {
        const response = await fetch(API + region.endpoint);
        const pokeData = await response.json();
        const regionStarters = pokeData.results;
        setStarters(regionStarters);
        setPage('starters');
      }
    })
  }

  const value = { regions, page, starters, setPage, setRegion }
  
  return <PokedexContext.Provider value={value}>{children}</PokedexContext.Provider>
}

export const usePokedex = () => {
  const context = useContext(PokedexContext)
  if (!context) {
    throw new Error("Must have access to PokedexProvider")
  }
  return context;
}