import { JSXElementConstructor, ReactElement } from "react";

export default interface BaseModalProps{
    title: string;
    children: ReactElement<any, string | JSXElementConstructor<any>>;
    open: boolean;
}