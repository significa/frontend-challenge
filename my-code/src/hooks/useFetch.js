import { useState, useEffect } from 'react';
import getMovies from '../services/getMovies';

const useFetch = movieTitle => {
  const [movies, setMovies] = useState(null);
  const [searching, setSearching] = useState(false);
  const [searchingError, setSearcingError] = useState(false);

  const minLength = movieTitle.trim().length > 3;

  useEffect(() => {
    if (!minLength) {
      setSearcingError(false);
      setSearching(false);
      setMovies(null);
      return;
    }
    setSearcingError(false);
    setSearching(true);

    const debounceHandler = setTimeout(async () => {
      try {
        const { Search } = await getMovies(movieTitle);
        setSearching(false);
        setMovies(Search);
      } catch (error) {
        setMovies([]);
        setSearcingError(true);
      }
    }, 1000);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [movieTitle]);

  return { movies, searching, searchingError };
};

export default useFetch;
