import { usePokedex } from "./PokedexContext";

const Region = ({ region }) => {
  const { setRegion } = usePokedex();
  const selectRegion = () => setRegion(region);

  return (
    <form action={selectRegion}>
      <button name="region" className="region">{ region.name }</button>
    </form>
  )
}

export default Region;