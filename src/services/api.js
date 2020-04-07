import axios from 'axios';

const API_KEY = '16da3c7c6882c8c6fe2e82b63b8f8823';

export const searchMovies = (query) =>
	axios.get(
		`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
	);

export const getMovieById = (id) =>
	axios.get(
		`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&api_key=${API_KEY}`
	);
