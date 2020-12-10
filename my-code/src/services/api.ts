import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.omdbapi.com'
})

export default api
