import { SxProps, Theme } from "@mui/material";

export default interface BaseDatePickerProps {
    label: string;
    disablePast?: boolean | false;
    disableFuture?: boolean | false;
    name?:string;
    sx?:  SxProps<Theme>;
}