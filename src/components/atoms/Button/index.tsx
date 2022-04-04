import { ReactNode } from "react"
import { ButtonClean, ButtonContained, ButtonOutlined, CloseContainer } from "./style";


interface ButtonProps {
  variant?: 'contained' | 'clean' | 'outlined';
  children: ReactNode;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ variant, children, color, onClick }: ButtonProps) {

  switch (variant) {
    case 'clean':
      return (
        <ButtonClean onClick={onClick} color={color}>
          {children}
        </ButtonClean>
      )
    case 'outlined':
      return (
        <ButtonOutlined onClick={onClick} color={color}>
          {children}
        </ButtonOutlined>
      )
    case 'contained':
      return (
        <ButtonContained onClick={onClick} color={color}>
          {children}
        </ButtonContained>
      )
    default:
      return (
        <ButtonContained onClick={onClick} color={color}>
          {children}
        </ButtonContained>
      )
  }

}

interface CloseButtonProps{
  handleClose: ()=> void;
}


export function CloseButton({handleClose}:CloseButtonProps){

  return(
    <CloseContainer href="#" onClick={handleClose}>
      <span>x</span>
    </CloseContainer>
    
  )

}