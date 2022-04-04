import { CarIcon } from "../../../assets/icons/CarIcon";
import { MotocycleIcon } from "../../../assets/icons/MotocycleIcon";
import { Container } from "./style";

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