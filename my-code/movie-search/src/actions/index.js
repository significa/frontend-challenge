import axios from 'axios';

export const types = {
  FETCH_CATALOGUE_START: 'FETCH_CATALOGUE_START',
  FETCH_CATALOGUE_COMPLETE: 'FETCH_CATALOGUE_COMPLETE',
  FETCH_CATALOGUE_ERROR: 'FETCH_CATALOGUE_ERROR',
  FETCH_MOVIE_START: 'FETCH_MOVIE_START',
  FETCH_MOVIE_COMPLETE: 'FETCH_MOVIE_COMPLETE',
  FETCH_MOVIE_ERROR: 'FETCH_MOVIE_ERROR'
}

const ROOT_URL = 'http://www.omdbapi.com/?apikey=';
const API_KEY = '5766cd6e';

export function fetchCatalogue(searchTerm) {
  const request = axios.get(`${ROOT_URL}${API_KEY}&s=${searchTerm}`);

  return {
    type: types.FETCH_CATALOGUE_COMPLETE,
    payload: request
  }
}

export function fetchMovie(imdbID) {
  const request = axios.get(`${ROOT_URL}${API_KEY}&i=${imdbID}`);

  return {
    type: types.FETCH_MOVIE_COMPLETE,
    payload: request
  }
}
