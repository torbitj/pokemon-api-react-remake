import { usePokedex } from "./PokedexContext";

const SelectedPokemon = () => {
  const { fetchedPokemon } = usePokedex();
  console.log(fetchedPokemon)
  return (
    <>
      <h1>{fetchedPokemon.name}</h1>
      <img src="" alt={`${fetchedPokemon.name} facing to the front`} />
    </>
  )
}

export default SelectedPokemon;