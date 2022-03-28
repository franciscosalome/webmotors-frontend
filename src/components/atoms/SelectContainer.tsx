import { useState } from "react"
import styled from "styled-components"
import { Input } from "./Input"


const Container = styled.div`
  margin: 0.5rem;

  & > div{
    border :thin solid black;
    display: flex;
    align-items:center;
    justify-content: space-between;
    & >span{
    font-size: 0.7rem;
    margin: 0 0.5rem 0 0rem;
  }
  & > input {
    width: 100%;
    height: 2.25rem;
    border: none;
    padding: 0.5rem;

    &:focus{
      outline: none;
    }
  }
  }

  &.mudou{
    background: blue;
  }
`

const HiddenContent = styled.div`
  background: red;
  display: block;
  position: fixed;
  min-width: 180px;
  height: 100px;
  transition: filter 1s;

`

export function SelectContainer() {

 const [show, setShow] = useState(false)
  return (
    <Container>
      <div >
        <input
          type='text'
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
          placeholder='Valor'
        />
        <span onClick={()=>setShow(!show)} >▼</span>
      </div>
      {show ? (
        <HiddenContent>
          <div>
            <Input placeholder="Mínimo" />
          </div>
        </HiddenContent>
      ): ''}

    </Container>
  )
}