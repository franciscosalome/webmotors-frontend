import { createContext, ReactNode, useContext, useState } from "react";

interface IhandleSetPrice {
  min: number;
  max: number;
}

interface FilterContextData {
  showPriceFilter: boolean;
  selectedMake: string;
  selectedModel: string;
  selectedVersion: string;
  selectedVehicle: string;
  selectedMenu: string;
  checkboxNew: boolean;
  checkboxUsed: boolean;
  selectedCity: string;
  geoReach: number;
  priceRange: {
    min: number;
    max: number;
  };
  handleSelectedMenu: (menu: string) => void;
  handleSetPriceRange: ({}: IhandleSetPrice) => void;
  handleSetShowPriceFilter: (showing: boolean) => void;
  setCheckboxNew: (selected: boolean) => void;
  setCheckboxUsed: (selected: boolean) => void;
  handleSelectMake: (make: string) => void;
  handleSelectModel: (model: string) => void;
  handleSelectVersion: (version: string) => void; 
  handleSelectVehicle: (vehicle: string) => void;
  handleSelectCity: (city: string) => void;
  handleSelectGeoReach: (reach: number) => void;
}

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterContext = createContext({} as FilterContextData)

export function FilterProvider({children}: FilterProviderProps) {

  const [showPriceFilter, setShowPriceFilter] = useState(false);

  const [selectedMake, setSelectedMake] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedVersion, setSelectedVersion] = useState('')
  const [selectedVehicle, setSelectedVehicle] = useState('')

  const [selectedMenu, setSelectedMenu] = useState('car')

  const [checkboxNew, setCheckboxNew] = useState(false)
  const [checkboxUsed, setCheckboxUsed] = useState(false)

  const [selectedCity, setSelectedCity] = useState('')
  const [geoReach, setGeoReach] = useState(100)
  const [priceRange, setPriceRange] = useState({min: 0, max: 0})
  

  function handleSetShowPriceFilter(show: boolean){
    setShowPriceFilter(show)
  }

  function handleSelectedMenu(menu: string){
    setSelectedMenu(menu)
  }

  function handleSetPriceRange({min, max}:IhandleSetPrice ){
    setPriceRange({min, max})
  }

  function handleSelectMake(make:string){
    setSelectedMake(make)
  }
  function handleSelectModel(model: string) {
    setSelectedModel(model)
  }
  function handleSelectVersion(version: string){
    setSelectedVersion(version)
  }
  function handleSelectVehicle(vehicle: string){
    setSelectedVehicle(vehicle)
  }

  function handleSelectCity(city: string){
    setSelectedCity(city)
  }
  function handleSelectGeoReach(reach: number){
    setGeoReach(reach)
  }


  return (
    <FilterContext.Provider
      value={{
        showPriceFilter,
        selectedMake,
        selectedModel,
        selectedVehicle,
        selectedVersion,
        selectedMenu,
        checkboxNew,
        checkboxUsed,
        selectedCity,
        geoReach,
        priceRange,
        handleSelectedMenu,
        handleSetPriceRange,
        handleSetShowPriceFilter,
        setCheckboxNew,
        setCheckboxUsed,
        handleSelectMake,
        handleSelectModel,
        handleSelectVersion,
        handleSelectVehicle,
        handleSelectCity,
        handleSelectGeoReach
        }}>
          {children}
      </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)