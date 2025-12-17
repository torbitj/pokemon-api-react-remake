import { usePokedex } from "./PokedexContext";

const StarterListItem = ({ starter }) => {
  const { setSelectedPokemon } = usePokedex();
  const upperCaseName = `${starter.name.charAt(0).toUpperCase()}${starter.name.slice(1)}`
  return <li onClick={() => setSelectedPokemon(starter)}>{upperCaseName}</li>
}

export default StarterListItem;