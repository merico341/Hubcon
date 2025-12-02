import React from "react";
import { cva } from "class-variance-authority";
import Text from "./Text";

export const ButtonVariants = cva(`
    flex items-center 
    `, { 
        variants: {
            size: {
                sm: "w-43 p-2",
                md: "w-58 h-12.5",
                banner: "h-full flex-1"
            },
            rounded: {
                none: 'rounded-none',
                base: 'rounded-[10px]'
            },
            color: {
                gray: "bg-gray-3",
                yellow: "bg-tag-yellow",
                transparent: "bg-transparent"
            },
            hover: {
                none: "",
                BtoT: "hover:bg-linear-to-l hover:to-black ",
                TtoB: "hover:bg-linear-to-r hover:to-black "
            },
            justify: {
                none: "justify-end",
                center: "justify-center",
                between: "justify-between"
            },
        },
        defaultVariants: {
            size: "md",
            rounded: "base",
            color: "yellow",
            hover: "none",
            justify: "center"
        }
})

export default function Button({
    size,
    color,
    rounded,
    hover,
    justify,
    children,
    className,
    ...props
}) {
    return (
        <button className={ButtonVariants({size, rounded, color, hover, justify,  className})} {...props}>
            {React.Children.map(children, child => (
                <Text>
                    {child}
                </Text>
            ))}
        </button>
    )
}