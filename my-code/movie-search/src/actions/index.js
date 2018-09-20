import axios from "axios";

export const types = {
  FETCH_CATALOGUE_START: "FETCH_CATALOGUE_START",
  FETCH_CATALOGUE_COMPLETE: "FETCH_CATALOGUE_COMPLETE",
  FETCH_CATALOGUE_ERROR: "FETCH_CATALOGUE_ERROR",
  FETCH_MOVIE_START: "FETCH_MOVIE_START",
  FETCH_MOVIE_COMPLETE: "FETCH_MOVIE_COMPLETE",
  FETCH_MOVIE_ERROR: "FETCH_MOVIE_ERROR"
};

const ROOT_URL = "http://www.omdbapi.com/?apikey=";
const API_KEY = "5766cd6e";

export const fetchCatalogue = searchTerm => dispatch => {
  dispatch({ type: types.FETCH_CATALOGUE_START });

  axios
    .get(`${ROOT_URL}${API_KEY}&s=${searchTerm}`)
    .then(response =>
      dispatch({ type: types.FETCH_CATALOGUE_COMPLETE, payload: response.data })
    )
    .catch(error =>
      dispatch({
        type: types.FETCH_CATALOGUE_ERROR,
        payload: error,
        error: true
      })
    );
};

export const fetchMovie = imdbID => dispatch => {
  dispatch({ type: types.FETCH_MOVIE_START });

  axios
    .get(`${ROOT_URL}${API_KEY}&i=${imdbID}`)
    .then(response =>
      dispatch({ type: types.FETCH_MOVIE_COMPLETE, payload: response.data })
    )
    .catch(error =>
      dispatch({ type: types.FETCH_MOVIE_ERROR, payload: error, error: true })
    );
};
