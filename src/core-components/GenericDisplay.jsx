import React from "react";
import Display from "../components/Display";
import Filter from "./Filter";

export default function GenericDisplay() {
  return (
    <>
        {/* row */}
        <div className="flex flex-col sm:flex-row items-center gap-10 w-full sm:max-w-7xl mx-auto">
            <Filter shadow={'gold'}></Filter>
            <Display type='time' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
            <Display type='time' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
            <Display type='time' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
        </div>
    </>
  );
}
