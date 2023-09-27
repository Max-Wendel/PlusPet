import Button from '@mui/material/Button';
import DashedButtonProps from "./types";
import {DashedButtonStyles} from "./styles"

export default function DashedButton({disabled,onClick,children,type} : DashedButtonProps) {
    return (  
          <Button variant='contained' disabled={disabled} onClick={onClick} type={type} style={DashedButtonStyles}>{children}</Button>
    );
  }