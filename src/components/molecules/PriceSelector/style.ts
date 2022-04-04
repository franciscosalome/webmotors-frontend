import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  position: absolute;
  border: thin solid black;
  padding: 1rem;
  background: var(--shape);
  z-index: 999;
`

export const Input = styled.input`
  margin-left: 5px;
  border: none;
  max-width: 5rem;
  &:focus{
    outline: none;
  }
`
