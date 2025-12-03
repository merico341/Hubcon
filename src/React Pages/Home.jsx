import { useState } from 'react'
import '../css/App.css'
import Banner from '../core-components/Banner'
import Intermediary from '../core-components/intermediary'
import HighlightDisplay from '../core-components/HighlightDisplay'
import AuctionDisplay from '../core-components/AuctionDisplay'

export default function Home() {
  const [count, setCount] = useState(0);

  const valor = 250;

  return (
    <>
      <Banner></Banner>
      <Intermediary></Intermediary>
      <HighlightDisplay></HighlightDisplay>
      <AuctionDisplay></AuctionDisplay>
    </>
  )
}

