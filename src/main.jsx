import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokedexProvider } from './PokedexContext.jsx'

createRoot(document.getElementById('root')).render(
  <PokedexProvider>
    <App />
  </PokedexProvider>
)
