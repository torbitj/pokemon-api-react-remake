import { usePokedex } from "./PokedexContext";

const Region = ({ region }) => {
  const { setRegion } = usePokedex();

  return (
    <button className="region" onClick={() => setRegion(region)}>{ region.name }</button>
  )
}

export default Region;