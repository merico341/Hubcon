import React from "react";
import { cva } from "class-variance-authority";
import Text from "./Text";

export const TagVariants = cva(`
    w-21 h-5 rounded-[10px] flex items-center justify-center absolute
    top-3 right-3.5
    `, {
        variants: {
            color: {
                red: "bg-tag-red",
                yellow: "bg-tag-yellow",
                green: "bg-linear-to-r from-tag-green-1 to-tag-green-2",
                cyan: "bg-linear-to-r from-tag-cyan-1 to-tag-cyan-2",
                purple: "bg-linear-to-r from-tag-purple-1 to-tag-purple-2",
                sr: "bg-linear-to-r from-tag-blue to-tag-wine",
            }
        },
        defaultVariants: {
            color: "yellow"
        }
})

export default function Tag({
    children,
    type,
    color,
    className,
    ...props
}) {

    // if (type == 'time') {
    //     var timeRemening = '10:00:00'
    //     children = timeRemening
    //     color = 'red'
    // }

    switch (type) {
        case 'time':
            var timeRemening = '10:00:00'
            children = timeRemening
            color = 'red'
            break;
        case 'comum':
            children = 'Comum'
            color = 'green'
            break;
        case 'raro':
            children= 'Raro'
            color = 'cyan'
            break;
        case 'epico':
            children = 'Epico'
            color = 'purple'
            break;
        case 'super':
            children = 'super RARO'
            color = 'sr'
            break;
    }

    return (
        <div className={TagVariants({color, className, ...props})}>
            <Text boldness={'bold'} size={"sm"}>
                {children}
            </Text>
        </div>
    )
}