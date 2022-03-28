import styled from "styled-components";
import { useFilter } from "../../contexts/FilterContext";
import { CloseButton } from "../atoms/Button";
import { LabelContainer } from "../atoms/LabelContainer";

const Container = styled.div`
  display: flex;
  position: absolute;
  border: thin solid black;
  padding: 1rem;
  background: var(--shape);
  z-index: 999;
`

const Input = styled.input`
  margin-left: 5px;
  border: none;
  max-width: 5rem;
  &:focus{
    outline: none;
  }
`

export function PriceSelector() {
  const { handleSetPriceRange, priceRange, handleSetShowPriceFilter } = useFilter()

  function handleSetMinPrice(e) {
    const min = e.target.value *1
    if(min >= 0){
    handleSetPriceRange({ min, max: priceRange.max })
    }
  }
  function handleSetMaxPrice(e) {
    const max = e.target.value *1
    if(max >= 0){
      handleSetPriceRange({ max, min: priceRange.min })
    }
  }


  return (
    <Container>
      <LabelContainer placeholder="De">
        <Input
          name='input-from'
          value={priceRange.min}
          onChange={(e) => handleSetMinPrice(e)}
          type='number' />
      </LabelContainer>
      <LabelContainer placeholder="Até">
        <Input
          name='input-to'
          value={priceRange.max}
          onChange={(e) => handleSetMaxPrice(e)}
          type='number'
        />
      </LabelContainer>
      <CloseButton handleClose={()=> handleSetShowPriceFilter(false)} />
    </Container>
  )
}