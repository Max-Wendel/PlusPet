import React from "react";

export default interface DashedButtonProps {
    children: React.ReactNode;
    disabled: boolean;
    onClick?:() => void;
    type?: "button" | "submit" | "reset" | undefined
}