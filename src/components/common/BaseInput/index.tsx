import { TextField } from "@mui/material";
import BaseInputProps from "./types";
import { BaseInputStyles } from "./style";
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
        helperText,
        placeholder,
        required,
        id,
        name,
        touched,
        validators,
        onChange
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
            error={showError}
            helperText={helperText}
            placeholder={placeholder}
            required={required}
            style={BaseInputStyles}
            touched={touched}
            {...props}
        />
    )
}