import { InputAdornment, OutlinedInput } from "@mui/material";
import DateFieldProps from "./types";
import EventIcon from '@mui/icons-material/Event';
import { useField } from "usetheform";
import { onKeyPress } from "./utils";

export default function DateField({
    name,
    placeholder,
    size
}: DateFieldProps) {

    const props = useField({ type: 'text', name });

        return (
            <OutlinedInput
                name={name}
                placeholder={placeholder}
                onKeyPress={onKeyPress}
                size={size || 'small'}
                sx={{ width: '100%' }}
                endAdornment={
                    <InputAdornment position="end">
                        <EventIcon />
                    </InputAdornment>
                }
                {...props}
            />
        )
    }