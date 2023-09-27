import React from "react";

export default interface BasicButtonProps {
    children: React.ReactNode;
    variant: "text" | "outlined" | "contained"
    disabled: boolean;
    href?: string;
    onClick:() => void;
}