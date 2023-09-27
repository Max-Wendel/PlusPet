import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BaseSelectStyles } from './style';
import BaseSelectProps from './types';

export default function BaseSelect({
    description,
    options,
    id,
    placeholder
}:BaseSelectProps) {
    const [option, setOption] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setOption(event.target.value as string);
    };

    return (
        <Box>
                <Select
                    style={BaseSelectStyles}
                    id={id}
                    value={option}
                    displayEmpty
                    onChange={handleChange}
                    placeholder={placeholder}
                >
                    <MenuItem value="">
                        <em>{description}</em>
                    </MenuItem>
                    {
                        options.map(opt => {
                            return (
                                <MenuItem value={opt.value} key={opt.id}>{opt.description}</MenuItem>
                            )
                        })
                    }
                </Select>
        </Box>
    );
}