import axios from 'axios';

export const searchMovies = (query) =>
	axios.get(
		`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=16da3c7c6882c8c6fe2e82b63b8f8823`
	);
