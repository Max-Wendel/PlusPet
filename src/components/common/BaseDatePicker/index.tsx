import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptBR } from '@mui/x-date-pickers/locales';
import BaseDatePickerProps from './types';
import React from 'react';
import { Dayjs } from 'dayjs';

export default function BaseDatePicker({
    label,
    disableFuture,
    disablePast,
    sx
}:BaseDatePickerProps
) {

    const [value, setValue] = React.useState<Dayjs | null>(null);
    
    const onChange= (value:any) =>{
        setValue(value)
    }

    return (
        <LocalizationProvider 
            localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText} 
            dateAdapter={AdapterDayjs}
            >
                <DatePicker 
                    label={label}  
                    format='DD/MM/YYYY'
                    value={value}
                    onChange={(newDate)=>{ onChange(newDate)}}
                    localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText} 
                    sx={sx || {width: '100%'}}
                    disableFuture={disableFuture}
                    disablePast={disablePast}
                    />
        </LocalizationProvider>
    );
}