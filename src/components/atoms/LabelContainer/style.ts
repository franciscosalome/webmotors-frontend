import styled from "styled-components";

export const Container = styled.div`
  height: 40px;
  line-height: 40px;
  border: thin solid black;
  margin: 0.5rem;
  flex-grow: 1;
  flex-wrap: nowrap;
  display: flex;
  & span {
    margin-left: 0.5rem;
    background: var(--shape);
    color: var(--text-secondary);
  }
`