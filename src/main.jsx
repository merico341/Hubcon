import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './core-components/App.jsx'
import Home from './React Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
