import React from "react";
import Display from "../components/Display";
import Text from "../components/Text";

export default function HighlightDisplay() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center">
                <Text boldness={'bold'} className={'text-[36px]'}>
                    CARTAS EM DESTAQUE
                    <span class="block h-0.5 bg-blue-dark-1"></span>
                </Text>
            </div>

            {/* row */}
            <div className="flex items-center justify-center gap-10 w-325.5 m-auto ">
                <Display type='comum' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
                <Display type='comum' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
                <Display type='comum' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
                <Display type='comum' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
            </div>
        </div>
    )
}