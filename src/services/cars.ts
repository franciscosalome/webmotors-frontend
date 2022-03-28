import api from "./api";
import env from '../../env.json'
import { IGetModel, IGetVersion } from "../interfaces/api-interface";

export const getMakes = () => {
 return api.get(env.webmotors_api.endpoints.make)
}

export const getModels = ({makeId}:IGetModel) => {
  return api.get(env.webmotors_api.endpoints.model + `?MakeID=${makeId}`)
}

export const getVersions = ({ModelID}:IGetVersion ) => {
  return api.get(env.webmotors_api.endpoints.version + `?ModelID=${ModelID}`)
}
