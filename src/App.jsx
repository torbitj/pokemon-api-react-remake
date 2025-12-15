import { usePokedex } from './PokedexContext'
import RegionList from './RegionList'
import StarterList from './StarterList'
import SelectedPokemon from './SelectedPokemon'

function App() {
  const { page } = usePokedex();
  if (page === 'region') return <RegionList />
  if (page === 'starters') return <StarterList />
  if (page === 'pokemon') return <SelectedPokemon />
}

export default App
