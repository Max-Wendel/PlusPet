import Button from '@mui/material/Button';
import BasicButtonProps from './types';
import {BaseButtonStyles} from './styles';

export default function BasicButton({variant,disabled,href,onClick,children} : BasicButtonProps) {
  return (  
        <Button variant={variant} disabled={disabled} href={href} onClick={onClick} style={BaseButtonStyles}>{children}</Button>
  );
}
