import { usePokedex } from "./PokedexContext";
import StarterListItem from "./StarterListItem"

const StarterList = () => {
  const { grassType, fireType, waterType, region, clearRegion } = usePokedex();
  console.log(region);
  return (
    <>
      <h1>{region.name} Starter Pokémon</h1>
      <figure>
        <h2>Grass</h2>
        <ul id="grass">
          {grassType.map((starter) => <StarterListItem key={starter.url} starter={starter} />)}
        </ul>
      </figure>
      <figure>
        <h2>Water</h2>
        <ul id="fire">
          {fireType.map((starter) => <StarterListItem key={starter.url} starter={starter} />)}
        </ul>
      </figure>
      <figure>
        <h2>Fire</h2>
        <ul id="water">
          {waterType.map((starter) => <StarterListItem key={starter.url} starter={starter} />)}
        </ul>
      </figure>
      <button onClick={clearRegion}>Back to Regions</button>
    </>
  )
}

export default StarterList;