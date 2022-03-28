import { ReactNode } from "react";
import styled from "styled-components"


const Button = styled.span`
  font-size: 1rem;
  margin: auto 0;
  line-height: 1rem;
  cursor: pointer;
  font-weight: bold;
  color: ${props => props.color ? props.color : 'var(--text-title)'};
`

interface OpenButtonProps {
  color?: string;
  children: ReactNode;
  opened: boolean;
}

export function OpenButton({ color, children, opened }: OpenButtonProps) {

  return (
    <>
      <Button opened={opened} color={color}>
        <span> › </span>

        {children}
      </Button>
    </>
  )
}