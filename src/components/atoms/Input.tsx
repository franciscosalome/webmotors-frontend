import React from "react";
import styled from "styled-components";

interface InputWithIconProps {
  style: React.CSSProperties;
  value: string;
  onChange: ()=>void;

}

export const Input = styled.input`
  height: 3rem;
  border: thin solid var(--gray500);
`

export function InputWithIcon({}:InputWithIconProps){
  return(
    <Input />
  )
}