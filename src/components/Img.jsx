import React from "react";
import { cva } from "class-variance-authority";

export const ImgVariance = cva(`
    
    `, {
    variants: {
        size: {
            xs: "w-16 h-19",
            sm: "w-48 h-63",
            md: "w-92 h-128",
            banner: "h-full w-full"
        },
        cover: {
            banner: "object-cover object-top"
        },
        radius: {
            none: "rounded-none",
            md: "rounded-[10px]"
        }
    },
    defaultVariants: {
        size: "sm",
        radius: "md"
    }
})

export default function Img({
    url,
    desc,
    size,
    cover,
    radius,
    className,
    ...props
}) {
    return (
        <img 
        src={url}
        alt={desc}
        className={ ImgVariance({size, cover, radius, className}) }
        {...props}
        />
    )
}