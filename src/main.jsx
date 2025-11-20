import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './core-components/App.jsx'
import Vitrine from './core-components/Vitrine.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Vitrine />
  </StrictMode>,
)
