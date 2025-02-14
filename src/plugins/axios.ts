import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL to the API
  timeout: 30000, // timeout
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
