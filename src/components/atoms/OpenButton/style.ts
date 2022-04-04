import styled from "styled-components";

export const Button = styled.span`
font-size: 1rem;
margin: auto 0;
line-height: 1rem;
cursor: pointer;
font-weight: bold;
color: ${props => props.color ? props.color : 'var(--text-title)'};
`
