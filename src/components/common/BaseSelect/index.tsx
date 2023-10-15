import Select from 'react-select';
import BaseSelectProps from './types';
import "./style.css";
import { defaultStyle, inputStyle } from './utils';

export default function BaseSelect({
    options,
    placeholder,
    defaultOption,
    isInputStyle,
    onChange,
    value
}:BaseSelectProps) {

    return (
        <Select 
            defaultValue={defaultOption} 
            placeholder={placeholder} 
            options={options} 
            onChange={onChange} 
            value={value} 
            styles={ isInputStyle ? inputStyle : defaultStyle}
            />
    );
}