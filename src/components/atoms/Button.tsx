import { ReactNode } from "react"
import styled from "styled-components"


interface ButtonProps {
  variant?: 'contained' | 'clean' | 'outlined';
  children: ReactNode;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const defaultButtonProps = `
  font-weight: bold;
  height: 48px;
  max-width: 100%;
  border-radius: 3px;
  margin: 0.5rem 0;
  padding: 0.5rem 3rem;
  transition: filter 0.2s;
  white-space: nowrap;
  &:hover{
    filter: brightness(1.1);
  }
`

const ButtonClean = styled.button`
  ${defaultButtonProps}
  background: none;
  border: none;
  color: ${props => props.color ? props.color : 'var(--text-title)'} ;
`

const ButtonContained = styled.button`
  ${defaultButtonProps}
  background: ${props => props.color ? props.color : 'var(--red-one)'};
  border: none;
  width: 320px;
  font-size: 1.3rem;
  color: ${props => props.color ? props.color : 'var(--shape)'} ;
`
const ButtonOutlined = styled.button`
  ${defaultButtonProps}
  background: none;
  border: ${props => props.color ? props.color : 'var(--red-one)'} solid medium;
  color: ${props => props.color ? props.color : 'var(--red-one)'};
`


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

const CloseContainer = styled.a`
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  border-radius: 50%;
  color: var(--text-secondary);
  border: thin solid var(--text-secondary);
  margin: auto;
  text-decoration: none;
  padding: 0;
  & span {
    position: relative;
    top: -1px;
  }
`

export function CloseButton({handleClose}:CloseButtonProps){

  return(
    <CloseContainer href="#" onClick={handleClose}>
      <span>x</span>
    </CloseContainer>
    
  )

}