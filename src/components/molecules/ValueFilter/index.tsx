import { useEffect, useState } from "react";
import { useFilter } from "../../../contexts/FilterContext";
import { formatCurrency } from "../../../utils/formater";
import { LabelContainer } from "../../atoms/LabelContainer";
import { PriceSelector } from "./../PriceSelector";
import { Container } from "./style";


export function ValueFilter() {

  const { priceRange, showPriceFilter, handleSetShowPriceFilter } = useFilter()

  const [labelText, setLabelText] = useState('')

  const [placeholder, setPlaceholder] = useState('Faixa de preço')
  useEffect(() => {
    if (priceRange.min && priceRange.max){ 
      setPlaceholder('De')
      return setLabelText(`${formatCurrency(priceRange.min)} até ${formatCurrency(priceRange.max)}`)
    }
    if (!priceRange.min && !priceRange.max) {
      setPlaceholder('Faixa de preço')
      return setLabelText(``)
    }
    if (!priceRange.min) {
      setPlaceholder('Até')
      return setLabelText(` ${formatCurrency(priceRange.max)}`)
  }
    if (!priceRange.max) {
      setPlaceholder('A partir de')
      return setLabelText(`${formatCurrency(priceRange.min)}`)
  }
  }, [priceRange])

  function handleShowHidePriceFilter(e){
    const inputName = e.target && e.target.name
    if(
      inputName !== 'input-from' 
      && inputName !== 'input-to'
      ){
      console.log(inputName)
      handleSetShowPriceFilter(!showPriceFilter)
    }
  }


  return (
    <Container onClick={(e)=>handleShowHidePriceFilter(e)}>
      <LabelContainer 
      placeholder={placeholder}>
        <span>{labelText}</span>
      </LabelContainer>
      {showPriceFilter ? (
        <PriceSelector />
      ) : ('')}
    </Container>
  )
}