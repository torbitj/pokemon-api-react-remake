import { usePokedex } from "./PokedexContext";
import Region from "./Region";

const RegionList = () => {
  const { regions } = usePokedex();

  return (
    <>
      <h1>Choose Your Pokémon Region</h1>
      {regions.map((region) => <Region key={region.id} region={region} />)}
    </>
  )
}

export default RegionList;