import React from "react";
import { Input } from "./style";

interface InputWithIconProps {
  style: React.CSSProperties;
  value: string;
  onChange: ()=>void;

}

export function InputWithIcon({}:InputWithIconProps){
  return(
    <Input />
  )
}