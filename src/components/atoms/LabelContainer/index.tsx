import { ReactNode } from "react";
import { Container } from "./style";


interface LabelContainerProps {
  placeholder?: string;
  children: ReactNode;

}
export function LabelContainer({ placeholder, children }: LabelContainerProps) {

  return (
    <>
      <Container>
        <span>
          {placeholder}:
        </span>
        {children}
      </Container>
    </>
  )
}