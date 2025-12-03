import React from "react";
import { cva } from "class-variance-authority";
import Text from "../components/Text";
import Card from "../components/Card";
import Slider from "../components/Slider";
import Drop from "../components/Drop";

export default function Filter({
    shadow
}) {
    return (
        <Card className={'flex flex-col justify-evenly pl-7 pr-12'} size={'md'} animation={'none'} drop={'shadow'} shadow={shadow} rounded={'sm'}>

            
            <div className="flex pl-6 justify-center items-center">
                <Text as="h2" boldness={'bold'} className={'text-[32px]'}>Marketplace</Text>
            </div>
            
                <Text boldness={'bold'} size={'sm1'}>
                    Filtros
                </Text>

            
            <Drop itens={'Todas Comum Raro epico Super-raro'} text={'Raridade'}>Todas</Drop>
            
            <Drop itens={'Todas Muito-usadas Usadas quase-nova nova perfeita'} text={'Raridade'}>Todas</Drop>
            
            <div className="flex flex-col gap-1 text-start">
                <Text>Faixa de preço</Text>
                <Slider></Slider>
                <div className="flex justify-between ">
                    <Text>R$0</Text>
                    <Text>R$5000</Text>
                </div>
            </div>
        </Card>
    )
}