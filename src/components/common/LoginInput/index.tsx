import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import LoginInputProps from "./types";
import { LoginInputStyles, _iconSx } from "./style";
import { useField, useValidation } from "usetheform";
import React from "react";

export default function LoginInput(
    {
        id,
        name,
        touched,
        validators,
        placeholder,
        password
    }: LoginInputProps
) {
    const [status, validation] = useValidation(validators);
    const showError = status.error !== undefined;
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const _getInputType = () =>{
        if(password){
            return showPassword ? 'text' : 'password';
        }else{
            return 'text';
        }
    }

    const props = useField({
        type: _getInputType(),
        name,
        touched,
        ...validation
    });
    
    const _getAdornment = () =>{
        if(password){
            return (
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
            )
        }else{
            return  (
                <InputAdornment position="start">
                    <AccountCircle sx={_iconSx} />
                </InputAdornment>
            )
        }
    }

    return (
        <OutlinedInput
            id={id}
            name={name}
            size={'medium'}
            color={'info'}
            error={showError}
            placeholder={placeholder}
            style={LoginInputStyles}
            {...props}
            endAdornment={_getAdornment()}
        />
    )
}