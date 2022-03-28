import styled from "styled-components"
import { CarIcon } from "../../assets/icons/CarIcon";
import iconCar  from '../../assets/car.svg'
import { ReactSVGElement } from "react";
import { MotocycleIcon } from "../../assets/icons/MotocycleIcon";
const Container = styled.button`
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
interface SwitchButtonProps {
  selected?: boolean;
  bigText: string;
  smallText: string;
  icon: 'car' | 'motocycle';
  setSelected: ()=>void;
}

export function SwitchButton({selected, bigText, smallText, icon, setSelected}:SwitchButtonProps){
  return (
    <Container selected={selected} onClick={setSelected}>
      {icon === 'car' ? (
      <CarIcon color={selected ? 'var(--red-two)' : 'var(--text-title)' } height="3rem" width='90%' />
      ): (
      <MotocycleIcon color={selected ? 'var(--red-two)' : 'var(--text-title)' } height="3rem" width='90%' />
      )}
      <div>
        <span>{smallText}</span>
        <span id='big-label'>{bigText}</span>
      </div>
     
    </Container>
  )
}