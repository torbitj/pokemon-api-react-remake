import { usePokedex } from "./PokedexContext";
import Region from "./Region";

const RegionList = () => {
  const { regions } = usePokedex();

  return (
    <>
      {regions.map((region) => <Region region={region} />)}
    </>
  )
}

export default RegionList;