import styled from "styled-components"
import { LabelContainer } from "../atoms/LabelContainer";

const SelectField = styled.select`
    border: none;
    outline: none;
    flex-grow: 1;
`
interface SelectProps {
  options: [];
  placeholder?: string;
  value: string;
  defaultOption: string;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;


}
export function Select({ options, placeholder, value, defaultOption, handleChange }: SelectProps) {

  return (
    <>
      <LabelContainer placeholder={placeholder}>
        <SelectField onChange={handleChange}>
          <option selected={!value} value=''>{defaultOption}</option>
          {options && options.map(option => (
            <option selected={value == option.value} value={option.value}>{option.label}</option>
          ))}
        </SelectField>
      </LabelContainer>
    </>
  )
}