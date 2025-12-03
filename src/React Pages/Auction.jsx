import React from "react";
import Card from "../components/Card";
import Img from "../components/Img";
import Tag from "../components/Tag";
import Text from "../components/Text";
import Button from "../components/Button";
import GenericDisplay from "../core-components/GenericDisplay";

export default function Auction() {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
        <Card as="main" size={'lg'} className={'flex gap-2 p-3 border border-blue-1'} rounded={'md'}>
            <Img size={'md'} url={'https://images.ygoprodeck.com/images/cards/29301450.jpg'}></Img>
        
            <div className="flex flex-col gap-3">
                <div className="flex justify-between">

                    <Tag size={'md'} display={'normal'} type={'super'}></Tag>
                    <Tag size={'md'} display={'normal'} type={'time'}></Tag>
                </div>
                
                <Text as="h1" boldness={'bold'} className={'text-[35px] mt-3'}>S:P Pequena Cavaleira</Text>
                <Text as="h2" color='ash' className={'text-justify'}>Uma pequena cavaleira que ira te ajudar a vira o jogo</Text>
                <span class="block h-0.5 bg-blue-dark-1"></span>

                <Text as="h1" boldness={'bold'} className={'text-[35px] mt-3'}>Detalhes da Carta</Text>
                <div>

                    <Text as="h2" color='ash' className={'text-justify'}>Nome: S:P Pequena Cavaleira</Text>
                    <Text as="h2" color='ash' className={'text-justify'}>Tipo: Guerreiro/Link/Efeito</Text>
                    <Text as="h2" color='ash' className={'text-justify'}>Estrelas: 2 links</Text>
                    <Text as="h2" color='ash' className={'text-justify'}>Efeito: Se este card for Invocado por Invocação-Link usando um Monstro de Fusão, Sincro, Xyz ou Link como matéria: você pode escolher 1 card no campo ou em qualquer Cemitério; bana-o e, além disso, seus monstros não podem atacar diretamente neste turno. Quando seu oponente ativar um card ou efeito (Efeito Rápido): você pode escolher 2 monstros com a face para cima no campo, incluindo um monstro que você controla; bana os dois até a Fase Final. Você só pode usar cada efeito de "S:P Pequena Cavaleira" uma vez por turno.</Text>
                    <Text as="h2" color='ash' className={'text-justify'}>Edição: #RA03-EN049 </Text>
                </div>
                
                <span class="block h-0.5 bg-tag-yellow"></span>
                <Button onClick={() => alert('Comprar clicado!')} size={'md'}>Compre Agora</Button>
            </div>
        </Card>

        <Text as="h1" boldness={'bold'} className={'text-[35px] mt-3'}>Leilões Disponíveis</Text>

        <GenericDisplay></GenericDisplay>
        <GenericDisplay></GenericDisplay>
    </div>
  )
}