import axios from "axios";
import env from '../../env.json'

const geolocationApi = axios.create({
  baseURL: env.geolocation_api.base_url,
  headers: {
      Accept: 'application/json',
  },
})

export default geolocationApi