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
            ash: "text-ash-1",
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
            lg2: "text-[22px]",
            lg3: "text-[24px]",
            h1: "text-7xl"
        },
        tracking: {
            none: "tracking-normal",
            standart: "tracking-[-5%]",
            banner: "tracking-[-6%]"
        }
    },
    defaultVariants: {
        type: "normal",
        boldness: "normal",
        color: "white",
        size: "md",
        tracking: 'standart'
    }
})

export default function Text({
    as = "p",
    children,
    className,
    size,
    type,
    boldness,
    tracking,
    color,
    ...props
}) {
    return React.createElement(
        as,
        {
            className: TextVariants({type, boldness, color, size, tracking, className, ...props})
        },
        children
    )
}