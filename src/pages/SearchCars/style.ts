import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: var(--background);
`

export const Content = styled.main`
  display: flex;
  max-width: 933px;
  align-self: center;
  flex-direction: column;
  background: var(--background);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  & > img {
    align-self: flex-start;
    margin-top: 2rem;
  }
`