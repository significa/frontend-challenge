import axios from "axios";

export const getSingleMovie = (id) => {
  return axios.get(
    `https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
  );
};

export const getMoviesList = (searchText) => {
  return axios.get(
    `https://www.omdbapi.com/?s=${searchText}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
  );
};
