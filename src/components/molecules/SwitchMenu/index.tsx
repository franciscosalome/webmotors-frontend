import { useFilter } from "../../../contexts/FilterContext"
import {SwitchButton} from '../../atoms/SwitchButton'
import { Container } from "./style"


export function SwitchMenu(){
  const {selectedMenu, handleSelectedMenu } = useFilter()
  return(
    <Container>
      <SwitchButton 
        setSelected={()=>handleSelectedMenu('car')}
        icon='car' 
        smallText="COMPRAR" 
        bigText="CARROS" 
        selected={selectedMenu === 'car'} />
      <SwitchButton 
        setSelected={()=>handleSelectedMenu('motocycle')}
        icon='motocycle' 
        smallText="COMPRAR" 
        bigText="MOTOS" 
        selected={selectedMenu === 'motocycle'}
        />
    </Container>
  )
}