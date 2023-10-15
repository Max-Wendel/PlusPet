import selectorHelper from "../../../model/selectorHelper";

export default interface BaseSelectProps {
    options: any[];
    name?: string;
    placeholder: string;
    defaultOption?: any;
    isInputStyle?: boolean | false;
    isClearable?: boolean | false;
    value?: selectorHelper;
    onChange?: (ev:any)=>void;
}