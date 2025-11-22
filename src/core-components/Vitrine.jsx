import { useState } from 'react'
import '../css/App.css'
import Card from '../components/Card'
import Img from '../components/Img'
import Text from '../components/Text'
import Tag from '../components/Tag'
import Button from '../components/Button'
import Slider from '../components/Slider'
import Drop from '../components/Drop'

export default function Vitrine() {
  const [count, setCount] = useState(0);

  const valor = 250;

  return (
    <div className='flex gap-8'>
      <Card className={'flex flex-col items-center justify-center gap-5'} size={'md'} shadow={'yellow'} drop={'shadow'} animation={'none'} >
        <Drop itens={'a b c d e'} text={'Seleção'}>Conteudo</Drop>
        <Slider></Slider>
      </Card>
      <Card className={'flex flex-col items-center justify-center gap-2'} size={'md'} shadow={'blue'} drop={'shadow'} animation={'pop'}>
        <Img url={"https://images.ygoprodeck.com/images/cards/42097666.jpg"} desc={"carta"}></Img>
        <Tag type={'super'}>Promo</Tag>
        <div className='w-[85%] flex flex-col text-start'>
          <Text as={'h1'} boldness={'bold'}>Spirit with eyes of Blue</Text>

          <Text as={'h2'}>Condição: nova</Text>

          <Text type={'italic'}>{count} Unidades disponiveis</Text>

          <Text color={'green'}>R$ {valor}</Text>
        </div>
        <Button>Adicionar ao Carrinho</Button>
      </Card>
      <Card>
        
      </Card>
    </div>
  )
}

