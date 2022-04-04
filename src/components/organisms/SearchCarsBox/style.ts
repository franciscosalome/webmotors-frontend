import styled from "styled-components"

export const Container = styled.section`
  padding: 3rem 0;
  width: 100%;
  max-height: 312px;
  display: block;
  & > div {
    display: flex;
  }

  & .checkbox-container {
      display: flex;
      flex-direction: row;
      &:first-child {
        margin-right: 1rem;
      }
  }

  & footer {
    display: flex;
    justify-content: space-between;
  }
 
`
export const Content = styled.section`
  background: var(--shape);
  padding: 1rem;
`
export const FiltersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  & > section {
    max-width: 50%;
    flex-grow: 1;
    & > div {
      display: flex;
    }
  }

  & .model-filter-container {
  }
`