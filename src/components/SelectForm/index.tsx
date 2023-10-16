import Select from 'react-select';
import { useField } from 'usetheform';
import "./style.css";
import { defaultStyle, inputStyle } from '../common/BaseSelect/utils';
import SelecFormProps from './types';

export default function SelectForm({
    options,
    name,
    placeholder,
    defaultOption,
    isInputStyle,
    isClearable
}:SelecFormProps) {
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
    )
}