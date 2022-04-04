import { useEffect, useState } from "react";
import { getMakes, getModels, getVersions } from "../../../services/cars";
import { Button } from "../../atoms/Button";
import { Checkbox } from "../../atoms/Checkbox";
import { OpenButton } from "../../atoms/OpenButton";
import { Select } from "../../molecules/Select";
import { SwitchMenu } from "../../molecules/SwitchMenu";
import { yearsGenerator } from "../../../utils/generators";
import { useCar } from "../../../contexts/CarContext";

import { ValueFilter } from "../../molecules/ValueFilter";
import { LocationSelect } from "../../molecules/LocationSelect";
import { useFilter } from "../../../contexts/FilterContext";
import { Container, Content, FiltersContainer } from "./style";


export function SearchCarsBox() {

  const {
    makesList,
    modelsList,
    versionsList,
    handleMakesList,
    handleModelsList,
    handleVehiclesList,
    handleVersionsList,
  } = useCar()

  const {
    setCheckboxNew,
    setCheckboxUsed,
    checkboxNew,
    checkboxUsed,
    handleSetPriceRange,
    handleSelectGeoReach,
    handleSelectCity
  } = useFilter()

  const [selectedMake, setSelectedMake] = useState('')
  const [selectedModel, setSelectedModel] = useState('')

  const [yearsList, setYearsList] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data: makesData } = await getMakes()
      handleMakesList(makesData)
    }
    fetchData()
    setYearsList(yearsGenerator({ min: 1970, max: 2021 }))
  }, [])


  async function handleSelectMake(e) {
    handleModelsList([])
    handleVersionsList([])
    if (!e.target) return
    handleSelectMake(e.target.value)
    const { data: modelsData } = await getModels({ makeId: e.target.value })
    handleModelsList(modelsData)
  }
  async function handleSelectModel(e) {
    handleVersionsList([])
    if (!e.target) return
    handleSelectModel(e.target.value)
    const { data: versionsData } = await getVersions({ ModelID: e.target.value })
    handleVersionsList(versionsData)
  }

  function handleSelectVersion(e) {
    if (!e.target) return
    handleSelectVersion(e.target.value)
  }

  function handleCleanFilters() {
    handleSelectMake('')
    handleSelectModel('')
    handleSelectVersion('')
    handleSetPriceRange({min: 0, max: 0})
    handleSelectGeoReach(0)
    handleSelectCity('')
  }

  return (
    <Container>
      <div>
        <SwitchMenu />
        <Button
          color='var(--gold)'
          variant='outlined'>
          Vender meu carro
        </Button>

      </div>

      <Content>
        <section className='checkbox-container'>
          <Checkbox
            text='Novos'
            value={checkboxNew}
            setValue={setCheckboxNew}
          />
          <Checkbox
            text='Usados'
            value={checkboxUsed}
            setValue={setCheckboxUsed}
          />

        </section>
        <FiltersContainer>
          <section className="location-filter">
           <LocationSelect />
            <div>
              <Select
                placeholder="Ano"
                options={yearsList.map(year => ({ label: year, value: year }))}

              />
              <ValueFilter />

            </div>

          </section>
          <section className="model-filter-container">

            <div>
              <Select
                handleChange={handleSelectMake}
                placeholder="Marca"
                value={selectedMake}
                defaultOption="Todas"
                options={makesList.map(make => ({ label: make.Name, value: make.ID }))}
              />
              <Select
                handleChange={handleSelectModel}
                placeholder='Modelo'
                value={selectedModel}
                defaultOption="Todos"
                options={modelsList.map(make => ({ label: make.Name, value: make.ID }))}
              />
            </div>

            <Select
              handleChange={handleSelectVersion}
              placeholder='Versão'
              defaultOption="Todas"
              options={versionsList.map(version => ({ label: version.Name, value: version.ID }))}
            />
          </section>
        </FiltersContainer>

        <footer>
          <OpenButton 
            opened={false}
            color='var(--red-one)'
            >
            Busca Avançada
          </OpenButton>
          <div>
            <Button
              variant='clean'
              color='var(--text-secondary)'
              onClick={handleCleanFilters}
            >
              Limpar filtros
            </Button>
            <Button>
              VER OFERTAS
            </Button>
          </div>

        </footer>
      </Content>


    </Container>
  )
}