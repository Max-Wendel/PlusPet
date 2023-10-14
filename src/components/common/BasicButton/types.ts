import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import React from "react";

export default interface BasicButtonProps {
    children: React.ReactNode;
    variant: "text" | "outlined" | "contained"
    disabled: boolean;
    href?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?:() => void;
    sx?:  SxProps<Theme>;
}