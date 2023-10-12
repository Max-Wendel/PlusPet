import { TextField } from "@mui/material";
import BaseInputProps from "./types";
import { useField, useValidation } from "usetheform";
import { BaseInputStyles } from "./style";

export default function BaseInput(
    {
        disabled,
        label,
        size,
        value,
        variant,
        color,
        defaultValue,
        helperText,
        placeholder,
        required,
        id,
        sx,
        name,
        touched,
        validators,
    }: BaseInputProps
) {
    const [status, validation] = useValidation(validators);
    const props = useField({
        type: 'text',
        name,
        touched,
        ...validation
    });

    const showError = status.error !== undefined;

    return (
        <TextField
            id={id}
            name={name}
            disabled={disabled}
            value={value}
            label={label}
            size={size || 'medium'}
            variant={variant}
            color={color || 'info'}
            defaultValue={defaultValue}
            error={showError}
            helperText={helperText}
            placeholder={placeholder}
            required={required}
            style={BaseInputStyles}
            sx={sx}
            touched={touched}
            {...props}
        />
    )
}