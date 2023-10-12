import Button from '@mui/material/Button';
import BasicButtonProps from './types';
import {BaseButtonStyles} from './styles';

export default function BasicButton({
  variant,
  disabled,
  href,
  onClick,
  children,
  sx,
  type
} : BasicButtonProps) {
  return (  
        <Button 
          variant={variant} 
          disabled={disabled}
          href={href} 
          onClick={onClick} 
          style={BaseButtonStyles}
          sx={sx}
          type={type}
          >
            {children}
            </Button>
  );
}
