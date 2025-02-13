import axios from 'axios'

const api = axios.create({
  baseURL:
    typeof window == 'undefined'
      ? 'https://smu.liquidworks.com.br/api'
      : import.meta.env.VITE_URL_SERVIDOR + 'api/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
