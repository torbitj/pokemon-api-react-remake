import { usePokedex } from "./PokedexContext";

const Region = ({ region }) => {
  const { setRegion } = usePokedex();
  const selectRegion = () => {
    
  }

  return (
    <form>
      <button className="region">{ region.name }</button>
    </form>
  )
}

export default Region;