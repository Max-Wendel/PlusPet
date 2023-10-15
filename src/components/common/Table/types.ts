import Tutor from "../../../model/Tutor";

export default interface BaseTableProps {
    rows: Array<any | Tutor>;
    type: 'service' | 'pet' | 'tutor';
}

export interface BaseColumn {
    id: 'pet_name' | 'pet_tutor' | 'service' | 'status' | 'date' | 'specie' | 'breed' | 'gender' | 'cpf' | 'email' | 'icon' | 'button';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center' | 'left';
    format?: (value: number) => string;
}