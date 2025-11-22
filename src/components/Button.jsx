import React from "react";
import { cva } from "class-variance-authority";
import Text from "./Text";

export const ButtonVariants = cva(`
    rounded-[10px] flex items-center 
    `, { 
        variants: {
            size: {
                sm: "w-43 p-2",
                md: "w-58 h-12.5"
            },
            color: {
                gray: "bg-gray-3",
                yellow: "bg-tag-yellow"
            },
            justify: {
                center: "justify-center",
                between: "justify-between"
            }
        },
        defaultVariants: {
            size: "md",
            color: "yellow",
            justify: "center"
        }
})

export default function Button({
    size,
    color,
    justify,
    children,
    className,
    ...props
}) {
    return (
        <button className={ButtonVariants({size, color, justify,  className})} {...props}>
            {React.Children.map(children, child => (
                <Text>
                    {child}
                </Text>
            ))}
        </button>
    )
}