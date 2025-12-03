import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './core-components/App.jsx'
import Home from './React Pages/Home.jsx'
import Auction from './React Pages/Auction.jsx'
import itens from './React Pages/Itens.jsx'
import Product from './React Pages/Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auction />
  </StrictMode>
)
