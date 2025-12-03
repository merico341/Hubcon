import React from 'react';

export default function Seller({
  vendedorNome = "Cards Premium",
  avaliacao = 4.9,
  vendas = 1250,
  condicao = "Nova",
  estoque = 3,
  preco = 2499.90,
}) {

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-2xl text-white max-w-4xl mx-auto border border-blue-dark-1">
      <div className="flex items-center justify-between gap-10">
        
        <div className="flex items-center space-x-4 min-w-0">
          <div className=" bg-ash-2 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-xl font-semibold shrink-0">
            <div> 
                <h1>VC</h1>
            </div>
          </div>
          
          
          <div className="flex flex-col min-w-0">
            <h3 className="text-lg font-bold truncate">{vendedorNome}</h3>
            <div className="flex items-center text-sm text-gray-400">
              <span className="font-semibold text-yellow-500 mr-1">{avaliacao}</span>
              <span>• {vendas} vendas</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-8 text-sm shrink-0">
          
          <div className="flex flex-col items-center sm:block">
            <span className="text-gray-400 text-xs sm:text-sm">Condição: {condicao}</span>
          </div>

          <div className="flex flex-col items-center sm:block">
            <span className="text-gray-400 text-xs sm:text-sm">Estoque: 
              {estoque} un.
            </span>
          </div>
          
          <div className="flex flex-col items-center sm:block">
            <span className="text-gray-400 text-xs sm:text-sm">Preço: 
              R${preco}
            </span>
          </div>
    
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 ml-4 whitespace-nowrap border border-tag-yellow"
            onClick={() => alert('Comprar clicado!')}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};