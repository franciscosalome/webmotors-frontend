import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: none;
  border-bottom : ${props => props.selected ? 'solid medium var(--red-one)' : 'thin solid var(--text-secondary)'} ;
  height: 3rem;
  width: 10.8rem;
  display: flex;
  & svg{
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
  }
  & div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    color: var(--text-secondary);
  }
  & #big-label{
    color: ${props => props.selected ? 'var(--red-two)' : ''};
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`