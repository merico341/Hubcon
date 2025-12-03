import React from "react";
import Card from "../components/Card";
import Text from "../components/Text";
import Img from "../components/Img";
import Tag from "../components/Tag";
import Button from "../components/Button";

export default function Display() {
    return (
        <Card className={'flex flex-col items-center justify-evenly'} size={'md'} animation={''} drop={'shadow'} shadow={'gold'} rounded={'sm'}>

            <Tag type={'comum'}></Tag>
            <Img className={'mt-5'} url={'https://images.ygoprodeck.com/images/cards/33396948.jpg'}></Img>
            
            <div className="ml-7 w-full">
                <Text boldness={'bold'} size={'md'} tracking={'none'}>Exodia O proibido</Text>
                <Text size={'sm1'}>Condição: Novo </Text>
                <Text size={'sm'} type={'italic'}>8 Vendedores disponeiveis</Text>
                <Text color={'green'} boldness={'bold'} size={'lg3'}>R$250,00</Text>
            </div>
            
            <Button>Adicionar ao carrinho</Button>
        </Card>
    )
}