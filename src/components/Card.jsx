import React from "react";
import { cva, } from "class-variance-authority";

export const cardVariants = cva(`
    rounded-[10px] bg-gray-2 text-white transition duration-300
    relative
    `, {
        variants: {
            size: {
                none: '',
                md: 'w-3xs h-111',
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
            }
        },
        defaultVariants: {
            size: 'none',
            drop: 'none',
            shadow: 'none',
            animation: 'pop'
        }
    });

export default function Card({
    as = "div",
    size,
    drop,
    shadow,
    animation,
    children,
    className,
    ...props
}) {
    return React.createElement(
        as,
        {
            className: cardVariants({size, drop, shadow, animation, className, ...props})
        },
        children
    )
}