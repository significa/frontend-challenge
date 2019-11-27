import axios from 'axios';

export const API_KEY = '7a3aaca8';

const api = axios.create({
  baseURL: `http://www.omdbapi.com`,
  params: {
    apikey: API_KEY,
  },
});

export default api;
