import { useEffect } from "react";
import { Input } from "../../components/atoms/Input";
import { SearchCarsBox } from "../../components/organisms/SearchCarsBox";
import { getMakes } from "../../services/cars";
import { Container, Content } from "./style";
import logoWebmotors from '../../assets/logo-webmotors.png'

export function SearchCars() {
  useEffect(() => {
    async function fetchData() {
      const { data } = await getMakes()
      console.log(data)
    }
    fetchData()
  })
  return (
    <Container>
    
      <Content>
      <img 
        alt='Webmotors, a marca número 1 em venda e compra de carros novos e usados!' 
        src={logoWebmotors} 
        width='200px'
        />
        <SearchCarsBox />
      </Content>
    </Container>

  )
}