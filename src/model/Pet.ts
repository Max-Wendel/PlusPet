import Tutor from "./Tutor";

export default interface tutor {
    id?: string;
    name: string;
    birthDate?: string;
    spieces: string;
    gender?: string;
    breed?:string;
    archived: boolean;
    tutor: Tutor
}