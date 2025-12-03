import React from "react";
import Card from "../components/Card";
import Img from "../components/Img";
import Tag from "../components/Tag";
import Text from "../components/Text";
import Button from "../components/Button";
import Seller from "../core-components/Seller";

export default function Cart({
  vendedorNome = "SP pequena cavaleira",
  avaliacao = 4.9,
  vendas = 1250,
  condicao = "Nova",
  estoque = 3,
  preco = 2499.90,
}) {
    return (
        <div className="flex flex-col items-center justify-center mt-2">
            <div className="bg-gray-800 p-4 rounded-xl shadow-2xl text-white max-w-4xl mx-auto border border-blue-dark-1">
                <div className="flex sm:flex-row flex-col items-center justify-between gap-10">
                    
                    <div className="flex items-center space-x-4 min-w-0">
                    <Img size={'xs'} url={'https://images.ygoprodeck.com/images/cards/29301450.jpg'}></Img>
                    
                    
                    <div className="flex flex-col min-w-0">
                        <h3 className="text-lg font-bold truncate">{vendedorNome}</h3>
                        <div className="flex items-center text-sm text-gray-400">
                            <span className="font-semibold text-yellow-500 mr-1">{avaliacao} • </span>
                        </div>
                    </div>
                    </div>

                    <div className="flex items-center space-x-8 text-sm shrink-0">
                    
                    <ul>
                        <li className="flex flex-col items-center sm:block">
                            <span className="text-gray-400 text-xs sm:text-sm">Condição: {condicao}</span>
                        </li>
                        <li className="flex flex-col items-center sm:block">
                            <span className="text-gray-400 text-xs sm:text-sm">Estoque:
                            {estoque} un.
                            </span>
                        </li>
                        
                        <li className="flex flex-col items-center sm:block">
                            <span className="text-gray-400 text-xs sm:text-sm">Preço:
                            R${preco}
                            </span>
                        </li>
                    </ul>
                
                    <button 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ml-4 whitespace-nowrap border border-tag-yellow hover:bg-tag-yellow"
                        onClick={() => alert('Comprar clicado!')}
                    >
                        Comprar
                    </button>
                    </div>
                </div>
                </div>
                        
        </div>
    )
}