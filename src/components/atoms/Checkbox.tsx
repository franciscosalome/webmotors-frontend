import styled from "styled-components"


const Container = styled.div`
padding: 0.3rem;
line-height: 1rem;
& > input {
  margin-right: 5px;
}

`

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