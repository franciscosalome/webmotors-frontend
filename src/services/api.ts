import axios from 'axios';
import env from '../../env.json'

const api = axios.create({
  baseURL: env.webmotors_api.base_url,
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  },
});

export default api