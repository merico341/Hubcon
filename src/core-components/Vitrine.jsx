import { useState } from 'react'
import '../css/App.css'
import Card from '../components/Card'
import Img from '../components/Img'
import Text from '../components/Text'
import Tag from '../components/Tag'
import Button from '../components/Button'
import Slider from '../components/Slider'
import Drop from '../components/Drop'
import Banner from './Banner'
import Intermediary from './intermediary'
import HighlightDisplay from './HighlightDisplay'
import AuctionDisplay from './AuctionDisplay'

export default function Vitrine() {
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

