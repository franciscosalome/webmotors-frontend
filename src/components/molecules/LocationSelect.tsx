import styled from "styled-components";
import { useFilter } from "../../contexts/FilterContext";
import { LabelContainer } from "../atoms/LabelContainer";

const Content = styled.div`
  display: flex;
  padding: 0;

  & >input {
    border: none;
    width: 100%;
    text-align: center;
  }

  & > div {
    margin: 0;
    border-top: 0;
  }
`

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