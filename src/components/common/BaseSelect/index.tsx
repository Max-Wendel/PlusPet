import Select from 'react-select';
import BaseSelectProps from './types';
import { useField } from 'usetheform';
import "./style.css";
import { defaultStyle, inputStyle } from './utils';

export default function BaseSelect({
    options,
    name,
    placeholder,
    defaultOption,
    isInputStyle,
    isClearable
}:BaseSelectProps) {
    const {value, setValue} = useField({type: 'custom', name})
    const onChange = (value:any) => setValue(value);

    return (
        <Select 
            defaultValue={defaultOption} 
            placeholder={placeholder} 
            options={options} 
            onChange={onChange} 
            value={value} 
            isClearable={isClearable}
            styles={ isInputStyle ? inputStyle : defaultStyle}
            />
    );
}