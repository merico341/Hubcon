import React from "react";
import Card from "../components/Card";
import Img from "../components/Img";
import Tag from "../components/Tag";
import Text from "../components/Text";
import Button from "../components/Button";
import Seller from "../core-components/Seller";

export default function Product() {
    return (
        <div className="flex flex-col items-center justify-center mt-2">
            <Card as="main" size={'lg'} className={'flex gap-2 p-3 border border-blue-1'} rounded={'md'}>
                <Img size={'md'} url={'https://images.ygoprodeck.com/images/cards/89631139.jpg'}></Img>
            
                <div className="flex flex-col gap-3">
                    <Tag size={'md'} display={'normal'} type={'super'}></Tag>
                    
                    <Text as="h1" boldness={'bold'} className={'text-[35px] mt-3'}>Dragão Branco De Olhos Azuis</Text>
                    <Text as="h2" color='ash' className={'text-justify'}>Este lendário dragão é uma poderosa máquina de destruição. Praticamente invencível, muito poucos enfrentaram essa magnifica criatura e viveram para contar a história.</Text>
                    <span class="block h-0.5 bg-blue-dark-1"></span>

                    <Text as="h1" boldness={'bold'} className={'text-[35px] mt-3'}>Detalhes da Carta</Text>
                    <div>

                        <Text as="h2" color='ash' className={'text-justify'}>Nome: Dragão Branco De Olhos Azuis</Text>
                        <Text as="h2" color='ash' className={'text-justify'}>Tipo: Dragão/Normal</Text>
                        <Text as="h2" color='ash' className={'text-justify'}>Estrelas: 7 estrelas</Text>
                        <Text as="h2" color='ash' className={'text-justify'}>Efeito: Nenhum</Text>
                        <Text as="h2" color='ash' className={'text-justify'}>Edição: #LED3-EN006 </Text>
                    </div>
                    
                    <span class="block h-0.5 bg-blue-dark-1"></span>
                    <Button onClick={() => alert('Comprar clicado!')} size={'md'}>Compre Agora</Button>
                    
                </div>
            </Card>

            <Text as="h1" boldness={'bold'} className={'text-[35px] mt-3'}>
                Vendedores Disponiveis
            </Text>

            <div className="flex flex-col gap-3">
                <Seller></Seller>
                <Seller></Seller>
                <Seller></Seller>
                <Seller></Seller>
            </div>
        </div>
    )
}