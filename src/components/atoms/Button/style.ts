import styled from "styled-components"

export const defaultButtonProps = `
  font-weight: bold;
  height: 48px;
  max-width: 100%;
  border-radius: 3px;
  margin: 0.5rem 0;
  padding: 0.5rem 3rem;
  transition: filter 0.2s;
  white-space: nowrap;
  &:hover{
    filter: brightness(1.1);
  }
`

export const ButtonClean = styled.button`
  ${defaultButtonProps}
  background: none;
  border: none;
  color: ${props => props.color ? props.color : 'var(--text-title)'} ;
`

export const ButtonContained = styled.button`
  ${defaultButtonProps}
  background: ${props => props.color ? props.color : 'var(--red-one)'};
  border: none;
  width: 320px;
  font-size: 1.3rem;
  color: ${props => props.color ? props.color : 'var(--shape)'} ;
`
export const ButtonOutlined = styled.button`
  ${defaultButtonProps}
  background: none;
  border: ${props => props.color ? props.color : 'var(--red-one)'} solid medium;
  color: ${props => props.color ? props.color : 'var(--red-one)'};
`


export const CloseContainer = styled.a`
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  border-radius: 50%;
  color: var(--text-secondary);
  border: thin solid var(--text-secondary);
  margin: auto;
  text-decoration: none;
  padding: 0;
  & span {
    position: relative;
    top: -1px;
  }
`
