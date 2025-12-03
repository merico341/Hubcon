import React from "react";
import { cva } from "class-variance-authority";

export const cardVariants = cva(`
    bg-gray-2 text-white transition-shadow duration-300
    relative
    `, {
        variants: {
            size: {
                none: '',
                sm: 'w-97 h-50',
                md: 'w-3xs h-111',
                lg: 'w-302 h-153'
            },
            drop: {
                none: '',
                shadow: 'hover:shadow-card'
            },
            shadow: {
                none: '',
                blue: 'hover:shadow-shadow-blue',
                gold: 'hover:shadow-shadow-gold',
                purple: 'hover:shadow-shadow-purple'
            },
            animation: {
                none: '',
                pop: "hover:-translate-y-4"
            },
            rounded: {
                none: '',
                sm: 'rounded-[10px]',
                md: 'rounded-[25px]'
            }
        },
        defaultVariants: {
            size: 'none',
            drop: 'none',
            shadow: 'none',
            animation: 'none',
            rounded: 'none'
        }
    });

export default function Card({
    as = "div",
    size,
    drop,
    shadow,
    animation,
    rounded,
    children,
    className,
    ...props
}) {
    return React.createElement(
        as,
        {
            className: cardVariants({size, drop, shadow, animation, rounded, className, ...props})
        },
        children
    )
}