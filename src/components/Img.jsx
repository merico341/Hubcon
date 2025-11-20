import React from "react";
import { cva } from "class-variance-authority";

export const ImgVariance = cva(`
    
    `, {
    variants: {
        size: {
            card: "w-48 h-63" 
        },
        radius: {
            md: "rounded-[10px]"
        }
    },
    defaultVariants: {
        size: "card",
        radius: "md"
    }
})

export default function Img({
    url,
    desc,
    size,
    className,
    ...props
}) {
    return (
        <img 
        src={url}
        alt={desc}
        className={ ImgVariance({size, className}) }
        {...props}
        />
    )
}