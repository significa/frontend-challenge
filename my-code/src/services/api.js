import axios from 'axios';

export const API_KEY = '7a3aaca8';

const api = axios.create({
  baseURL: `http://www.omdbapi.com`,
  params: {
    apikey: API_KEY,
  },
});

/**
 * Fetch data from the IMDB API.
 */
export const fetchData = async (searchStr, currentPage, perPage) => {
  const res = await api.get('/', {
    params: { apikey: API_KEY, s: searchStr, page: currentPage },
  });

  let movies;
  if (res.data.Response === 'False') {
    movies = {
      totalResults: 0,
      page: 0,
      pageCount: 0,
      searchStr,
      list: [],
    };
  } else {
    let maxPages = Math.ceil(parseInt(res.data.totalResults, 10) / perPage);
    maxPages = maxPages > 100 ? 100 : maxPages;
    movies = {
      totalResults: res.data.totalResults,
      page: currentPage - 1, // zero based
      pageCount: maxPages,
      searchStr,
      list: res.data.Search,
    };
  }

  return movies;
};

export default api;
