import React from "react";
import { cva } from "class-variance-authority";

export const InputVariants = cva(`
    slider
    `, {
        variants: {
            rangeColor: {
                blue: "range-track-blue"
            },
            rangeProgressColor: {
                yellow: "range-progress-yellow"
            },
            ballColor: {
                yellow: "range-ball-yellow"
            }
        },
        defaultVariants: {
            rangeColor: "blue",
            rangeProgressColor: "yellow",
            ballColor: "yellow"
        }
})

export default function Slider({
    rangeColor,
    rangeProgressColor,
    ballColor,
    className,
    ...props
}) {
    return (
        <input type="range" className={InputVariants({rangeColor, rangeProgressColor, ballColor, className, ...props})} name="" id="" />
    )
}