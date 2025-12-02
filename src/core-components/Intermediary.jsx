import React from "react";
import Text from "../components/Text";
import Card from "../components/Card";

export default function Intermediary() {
    return (
        
        <section className="bg-gray-1 pt-17 pb-9 flex justify-center items-center gap-13">

            <Card size={'sm'} drop={'shadow'} shadow={'blue'} rounded={'md'} className={'flex flex-col items-center text-center'}>
                <div className="w-13 h-13 m-2 mt-3 bg-gray-4 rounded-full text-blue-2 flex justify-center items-center">
                    <i className="fa-solid fa-box-open text-[25px]"></i>
                </div>
                <Text as="h3" size={'lg'} boldness={'bold'} tracking={'normal'} className={'mb-4.5'} >Marketplace</Text>
                <Text size={'md2'} color={'ash'} className={'mr-6 ml-6'}>Compare preços de múltiplos vendedores e escolha a melhor oferta</Text>
            </Card>

            <Card size={'sm'} drop={'shadow'} shadow={'gold'} rounded={'md'} className={'flex flex-col items-center text-center'}>
                <div className="w-13 h-13 m-2 mt-3 bg-gold-1 rounded-full text-gold-2 flex justify-center items-center">
                    <i className="fa-solid fa-gavel text-[25px]"></i>
                </div>
                <Text as="h3" size={'lg'} boldness={'bold'} tracking={'normal'} className={'mb-4.5'} >Leilões</Text>
                <Text size={'md2'} color={'ash'} className={'mr-6 ml-6'}>Participe de leilões de cartas raras e monte sua coleção dos sonhos</Text>
            </Card>

            <Card size={'sm'} drop={'shadow'} shadow={'purple'} rounded={'md'} className={'flex flex-col items-center text-center'}>
                <div className="w-13 h-13 m-2 mt-3 bg-purple-1 rounded-full text-purple-2 flex justify-center items-center">
                    <i className="fa-solid fa-arrow-trend-up text-[25px]"></i>
                </div>
                <Text as="h3" size={'lg'} boldness={'bold'} tracking={'normal'} className={'mb-4.5'} >Preços Competitivos</Text>
                <Text size={'md2'} color={'ash'} className={'mr-6 ml-6'}>Sistema de comparação em tempo real garante os melhores preços</Text>
            </Card>

        </section>
    )
}