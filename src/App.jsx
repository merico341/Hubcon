import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'
import Home from './React Pages/Home'
import Itens from './React Pages/Itens'
import Product from './React Pages/Product'
import Auction from './React Pages/Auction'
import Cart from './React Pages/Cart'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Itens" element={<Itens />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Auction" element={<Auction />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

