export default interface BaseSelectProps {
    options: any[];
    name?: string;
    placeholder: string;
    defaultOption?: any;
    isInputStyle?: boolean | false;
    isClearable?: boolean | false;
    value?: any;
    onChange?: (ev:any)=>void;
}