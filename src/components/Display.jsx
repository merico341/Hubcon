import React from "react";
import Card from "./Card";
import Text from "./Text";
import Img from "./Img";
import Tag from "./Tag";
import Button from "./Button";

export default function Display({
    type,
    url,
    title,
    condicion,
    vendedor,
    price,
    shadow,
    children
}) {
    return (
        <Card className={'flex flex-col items-center justify-evenly'} size={'md'} animation={'pop'} drop={'shadow'} shadow={shadow} rounded={'sm'}>

            <Tag type={`${type}`}></Tag>
            <Img className={'mt-5'} url={`${url}`}></Img>
            
            <div className="ml-7 w-full">
                <Text boldness={'bold'} size={'md'} tracking={'none'}>{title === '' ? children : title}</Text>
                <Text size={'sm1'}>Condição: {condicion} </Text>
                <Text size={'sm'} type={'italic'}>{vendedor > 1 ? ` ${vendedor} vendedores disponiveis` : `${vendedor} vendedor disponivel`}</Text>
                <Text color={'green'} boldness={'bold'} size={'lg3'}>{price ? `R$${price}` : "Sem preço"}</Text>
            </div>
            
            <Button>Adicionar ao carrinho</Button>
        </Card>
    )
}