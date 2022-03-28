import { createContext, ReactNode, useContext, useState } from "react";
import { IMake, IModel, IVehicle, IVersion } from "../interfaces/api-interface";

interface CarContextData {
  makesList: IMake[];
  modelsList: IModel[];
  versionsList: IVersion[];
  vehiclesList: IVehicle[];
  handleMakesList: (makes:IMake[]) => void;
  handleModelsList: (models:IModel[]) => void;
  handleVersionsList: (versions:IVersion[]) => void;
  handleVehiclesList: (vehicles:IVehicle[]) => void;
}

interface CarProviderProps {
  children: ReactNode;
}

export const CarContext = createContext({} as CarContextData)

export function CarProvider({children}: CarProviderProps) {

  const [makesList, setMakesList] = useState<IMake[]>([])
  const [modelsList, setModelsList] = useState<IModel[]>([])
  const [versionsList, setVersionsList] = useState<IVersion[]>([])
  const [vehiclesList, setVehiclesList] = useState<IVehicle[]>([])

  function handleMakesList(makes: IMake[]){
    setMakesList(makes)
  }

  function handleModelsList(models: IModel[]){
    setModelsList(models)
  }

  function handleVersionsList(versions: IVersion[]){
    setVersionsList(versions)
  }

  
  function handleVehiclesList(vehicles: IVehicle[]){
    setVehiclesList(vehicles)
  }


  return (
    <CarContext.Provider
      value={{
        makesList,
        handleMakesList,
        modelsList,
        handleModelsList,
        versionsList,
        handleVersionsList,
        vehiclesList,
        handleVehiclesList
        }}>
          {children}
      </CarContext.Provider>
  )
}

export const useCar = () => useContext(CarContext)