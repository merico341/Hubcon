import React from "react";
import Display from "../components/Display";

export default function GenericDisplay() {
  return (
    <>
        {/* row */}
        <div className="flex items-center justify-center gap-10 w-325.5 m-auto ">
            <Display type='time' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
            <Display type='time' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
            <Display type='time' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
            <Display type='time' url='https://images.ygoprodeck.com/images/cards/33396948.jpg' condicion='Perfeita' shadow='blue' vendedor='2' price='250'>Exodia o Proibido</Display>
        </div>
    </>
  );
}
