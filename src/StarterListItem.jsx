import { usePokedex } from "./PokedexContext";

const StarterListItem = ({ starter }) => {
  const { setSelectedPokemon, upperCaseName } = usePokedex();
  return <li onClick={() => setSelectedPokemon(starter)}>{upperCaseName(starter.name)}</li>
}

export default StarterListItem;