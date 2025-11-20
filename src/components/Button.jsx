import React from "react";
import { cva } from "class-variance-authority";
import Text from "./Text";

export const ButtonVariants = cva(`
    rounded-[10px] flex items-center justify-center
    `, {
        variants: {
            size: {
                md: "w-58 h-12.5"
            },
            color: {
                yellow: "bg-tag-yellow"
            }
        },
        defaultVariants: {
            size: "md",
            color: "yellow"
        }
})

export default function Button({
    size,
    color,
    children,
    className,
    ...props
}) {
    return (
        <button className={ButtonVariants({size, color, className, ...props})}>
            <Text>
                {children}
            </Text>
        </button>
    )
}