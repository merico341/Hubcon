import '../css/App.css'
import Text from '../components/Text.jsx'
import Display from "../components/Display.jsx";
import Filter from '../core-components/Filter.jsx'
import GenericDisplay from '../core-components/GenericDisplay.jsx'

export default function Itens() {
  return (
    <div className='flex flex-col justify-center items-center mt-5 gap-10'>
      <Text boldness={'bold'} className={'Text-[35px]'}>
        Cartas
        <span class="block h-0.5 bg-tag-yellow"></span>
      </Text>

      {/* row */}
      <div className="flex items-center justify-center gap-10 w-325.5 m-auto ">
          <Filter shadow='gold'></Filter>
          <Display type='comum' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
          <Display type='comum' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
          <Display type='comum' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
      </div>

      {/* row */}
      <div className="flex items-center justify-center gap-10 w-325.5 m-auto ">
          <GenericDisplay></GenericDisplay>
      </div>

      {/* row */}
      <div className="flex items-center justify-center gap-10 w-325.5 m-auto ">
          <GenericDisplay></GenericDisplay>
      </div>

      {/* row */}
      <div className="flex items-center justify-center gap-10 w-325.5 m-auto ">
          <GenericDisplay></GenericDisplay>
      </div>
      
    </div>
  )
}