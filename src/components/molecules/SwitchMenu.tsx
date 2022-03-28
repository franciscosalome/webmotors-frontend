import styled from "styled-components"
import { useFilter } from "../../contexts/FilterContext"
import {SwitchButton} from '../atoms/SwitchButton'
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`

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