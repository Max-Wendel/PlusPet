import { useForm } from "usetheform"
import BasicButton from "../BasicButton"
import { ClearButtonProps } from "./types"

export default function ClearButton({
    label
}: ClearButtonProps
) {
    const {reset, pristine} = useForm();
    return (
        <BasicButton
            variant={"contained"}
            disabled={pristine}
            onClick={reset}
            sx={{ borderBottomColor: '#FC8C19', backgroundColor: 'transparent', border: '1px solid #FC8C19', color: 'black', fontWeight: 'bolder' }}
        >
            {label}
        </BasicButton>
    )
}