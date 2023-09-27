import { IconButton, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import BaseInputProps from "./types";
import { BaseInputStyles, BaseLoginInputStyles } from "./style";
import React from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AccountCircle } from "@mui/icons-material";
import { useField, useValidation } from "usetheform";

export default function BaseInput(
    {
        disabled,
        label,
        size,
        value,
        variant,
        color,
        defaultValue,
        error,
        helperText,
        placeholder,
        required,
        style,
        id,
        name,
        touched,
        validators,
        onChange
    }: BaseInputProps
) {
    const _iconSx = { fontSize: '40px', color: 'black' };

    const [status, validation] = useValidation(validators);
    const props = useField({
        type: 'text',
        name,
        touched,
        ...validation
    });

    const showError = status.error !==undefined;

    const _defaultStyle = () => {
        return (
            <TextField
                onChange={onChange}
                id={id}
                name={name}
                disabled={disabled}
                value={value}
                label={label}
                size={size || 'medium'}
                variant={variant}
                color={color || 'info'}
                defaultValue={defaultValue}
                error={error}
                helperText={helperText}
                placeholder={placeholder}
                required={required}
                style={BaseInputStyles}
                touched={touched}
                {...props}
            />
        )
    }

    const _loginStyle = () => {

        return (
            <OutlinedInput
                id={id}
                onChange={onChange}
                disabled={disabled}
                name={name}
                label={label}
                size={size || 'medium'}
                value={value}
                color={color || 'info'}
                defaultValue={defaultValue}
                error={showError}
                placeholder={placeholder}
                required={required}
                style={BaseLoginInputStyles}
                {...props}
                endAdornment={
                    <InputAdornment position="start">
                        <AccountCircle sx={_iconSx} />
                    </InputAdornment>
                }
            />
        )
    }

    const _passwordStyle = () => {
        const [showPassword, setShowPassword] = React.useState(false);
        const propsPassword = useField({
            type: showPassword ? 'text' : 'password',
            name,
            touched,
            ...validation
        })
        const handleClickShowPassword = () => setShowPassword((show) => !show);

        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
        };

        return (
            <OutlinedInput
                id={id}
                name={name}
                onChange={onChange}
                type={showPassword ? 'text' : 'password'}
                disabled={disabled}
                label={label}
                size={size || 'medium'}
                value={value}
                color={color || 'info'}
                defaultValue={defaultValue}
                error={showError}
                placeholder={placeholder}
                required={required}
                style={BaseLoginInputStyles}
                {...propsPassword}
                endAdornment={
                    <InputAdornment position="start">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff sx={_iconSx} /> : <Visibility sx={_iconSx} />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        )
    }

    switch (style) {
        default:
            return _defaultStyle();
        case 'login':
            return _loginStyle();
        case 'password':
            return _passwordStyle();
    }
}