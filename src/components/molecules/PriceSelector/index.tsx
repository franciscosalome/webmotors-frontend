import { useFilter } from "../../../contexts/FilterContext";
import { CloseButton } from "../../atoms/Button";
import { LabelContainer } from "../../atoms/LabelContainer";
import { Container, Input } from "./style";


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