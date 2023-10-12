import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export default interface BaseInputProps {
    id?: string;
    disabled?: boolean;
    name: string;
    error?: boolean;
    placeholder: string;
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning';
    size: 'medium' | 'small';
    variant: 'outlined' | 'filled' | 'standard';
    defaultValue?: string;
    required?: boolean;
    value?: any;
    label?: string;
    helperText?: string;
    style?: 'default' | 'login' | 'password';
    endAdornment?: JSX.Element;
    touched?: boolean;
    validators?: any;
    sx?:  SxProps<Theme>;
}