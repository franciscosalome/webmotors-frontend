import { Container } from "./style";

interface CheckboxProps {
  text: string;
  value: boolean;
  setValue: (value:boolean)=>void;
}

export function Checkbox({text, value, setValue}:CheckboxProps) {
  return (
    <Container onClick={()=>setValue(!value)}>
      <input onChange={()=>setValue(!value)} type='checkbox' checked={value} />
      <label>{text}</label>
    </Container>
  )
}