import { useId } from "react";
import { cva } from "class-variance-authority";
import Text from "./Text";
import Button from "./Button";
import './../css/Drop.css';

export const DropVariants = cva(`
    [:popover-open]:flex flex-col absolute w-43 -top-1
    `, {
        variants: {
            Drop: {
                bc: "drop-BC"
            }
        },
        defaultVariants: {
            Drop: "bc"
        }
})

export default function Drop({
    text,
    itens,
    drop,
    children,
    classname,
    ...props
}) {
    const uniqueId = useId();

    const array = itens.split(' ')

    
    const anchor = "menu-button-" + uniqueId;
    
    const position = '[position-anchor: ' + anchor + ']; [position-area: bottom center;] '
    
    const aItens = array.map(array =>
        <a href={array} key={array}>{array}</a>
    ); 

    return (
        <div className="flex flex-col justify-center text-white gap-2">
            <Text>
                {text}
            </Text>
            <Button className={'[anchor-name: --' + anchor + ']'} size={'sm'} color={'gray'} justify={'between'} popoverTarget={uniqueId}>
                {children}
                <i className="fa-solid fa-angle-down"></i>
            </Button>
            <div id={uniqueId} className={DropVariants({drop, position, classname, ...props})} popover="auto">
                {aItens}
            </div>
        </div>
    )
}