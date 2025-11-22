import React from "react";
import { cva } from "class-variance-authority";

export const TextVariants = cva(`
    font-montserrat
    `, {
    variants: {
        type: {
            normal: "not-italic",
            italic: "italic",
        },
        boldness: {
            black: "font-black",
            bold: "font-bold",
            normal: "font-normal"
        },
        color: {
            white: "text-white",
            black: "text-black",
            green: "text-green",
            red: "text-red"
        },
        size: {
            sm: "text-[12px]",
            sm1: "text-[14px]",
            md: "text-[16px]",
            md2: "text-[18px]",
            lg: "text-[20px]",
            lg2: "text-[22px]"
        }
    },
    defaultVariants: {
        type: "normal",
        boldness: "normal",
        color: "white",
        size: "md"
    }
})

export default function Text({
    as = "p",
    children,
    className,
    size,
    type,
    boldness,
    color,
    ...props
}) {
    return React.createElement(
        as,
        {
            className: TextVariants({className, type, boldness, color, size, ...props})
        },
        children
    )
}