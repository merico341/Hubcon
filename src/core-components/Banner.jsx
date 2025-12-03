import { useState, useEffect } from "react";
import { imgList } from "../js/helpers/imgList";
import Button from "../components/Button";
import Text from "../components/Text";

export default function Banner() {
    let list = imgList;

    const [atual, setAtual] = useState(0);

    function next() {
        setAtual((prev) =>  (prev + 1) % list.length)
    }

    function prev() {
        setAtual((prev) => (prev - 1 + list.length) % list.length)
    }

    useEffect(() => {
        const intervalId = setInterval(next, 5000);

        return () => {
            clearInterval(intervalId);
        }
    })

    return (
        <>
            <section id="banner" className={`h-150 w-full tracking-[-5%] flex items-center justify-center relative
            bg-top bg-cover bg-no-repeat transition-all`}
            style={{
                backgroundImage: `url(${list[atual]})`,
            }}
            >
                <div className="h-full w-full bg-linear-to-r from-trans-black-2 to-transparent flex justify-center text-white   ">
                    <Button size={'banner'} color={'transparent'} rounded={'none'} hover={'BtoT'}
                    onClick={prev}
                    ><i className="fa-solid fa-angle-left"></i></Button>
                    
                    
                    {/* CONTENT */}
                    <div className="flex flex-col justify-center h-full w-325.5">
                        <Text as="h1" size={'h1'} boldness={'bold'} className={'tracking-[-6%]'}>
                            <span className="tracking-[-6%]"> 
                                O maior marketplace <br/> de
                            </span>
                            <span className="tracking-[-6%] bg-linear-to-r from-blue-1 to-orange-1 bg-clip-text text-transparent"> colecionáveis</span>
                        </Text>
                        <Text as="h2" size={'lg2'} className={'mt-2.5'}>
                            Compre, venda e participe de leilões das cartas mais raras do mercado.
                        </Text>
                        <div className={"mt-7 flex gap-4 font-bold"}>
                            <a className="pt-1.75 pb-1.75 pr-2.75 pl-2.75 bg-blue-1 font-bold rounded-[10px] hover:bg-blue-dark-2" href="#">
                                Explorar Marketplace <i className="fa-solid fa-arrow-right text-[15px]"></i>
                            </a>
                            <a className="pt-1.75 pb-1.75 pl-6 pr-6 rounded-[10px] border border-white bg-trans-black-1 hover:bg-trans-black-2" href="#">
                                Ver Leilões
                            </a>
                        </div>
                    </div>

                    {/* BOLINHA */}
                    <div className="absolute bottom-6 bg-trans-black-2 flex  gap-1 p-2 rounded-2xl">
                        {list.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setAtual(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 border border-white` +
                                    (atual === i ? 'bg-white scale-125 border-2 border-blue-dark-2' : 'bg-white/50')
                                }
                            ></button>
                        ))
                        }
                    </div>
                    <Button size={'banner'} color={'transparent'} rounded={'none'} hover={'TtoB'}
                    onClick={next}><i className="fa-solid fa-angle-right"></i></Button>
                </div>
            </section>
        </>
    )
}