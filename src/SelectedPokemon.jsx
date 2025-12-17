import { usePokedex } from "./PokedexContext";

const SelectedPokemon = () => {
  const { fetchedPokemon, upperCaseName, clearSelected } = usePokedex();
  console.log(fetchedPokemon)
  return (
    <>
      <h1>{upperCaseName(fetchedPokemon.name)}</h1>
      <img
        src={fetchedPokemon.sprites.other[`official-artwork`].front_default}
        alt={`${fetchedPokemon.name} facing to the front`}
      />
      {fetchedPokemon.stats.map((stat) => {
        return <p>{upperCaseName(stat.stat.name)}: {stat.base_stat}</p>
      })}
      <button onClick={clearSelected}>Back to Starters</button>
    </>
  );
}

export default SelectedPokemon;