import { useFilter } from "../../../contexts/FilterContext";
import { LabelContainer } from "../../atoms/LabelContainer";
import { Content } from "./style";


export function LocationSelect() {

  const {geoReach, handleSelectGeoReach, selectedCity, handleSelectCity} = useFilter()

  return (
    <LabelContainer placeholder="Onde">
      <Content>
        <input value={selectedCity} onChange={(e)=> handleSelectCity(e.target.value)}  type='text' />
        <span>Raio: Até </span>
        <input 
          value={geoReach} 
          onChange={(e)=> handleSelectGeoReach(e.target.value)}  
          type='number' />
        <span>km</span>
      </Content>
     
    </LabelContainer>
  )
}