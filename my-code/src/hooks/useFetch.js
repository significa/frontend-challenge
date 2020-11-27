import { useState, useEffect } from 'react';
import getMovies from '../services/getMovies';

const useFetch = movieTitle => {
  const [movies, setMovies] = useState(null);
  const [searching, setSearching] = useState(false);
  const [searchingError, setSearchingError] = useState(false);

  const minLength = movieTitle.trim().length > 3;

  useEffect(() => {
    if (!minLength) {
      setSearchingError(false);
      setSearching(false);
      setMovies(null);
      return;
    }
    setSearchingError(false);
    setSearching(true);

    const debounceHandler = setTimeout(async () => {
      try {
        const response = await getMovies(movieTitle);
        if (response.Response === 'False') {
          setMovies([]);
          setSearchingError(true);
          setSearching(false);
        } else {
          setSearching(false);
          setMovies(response.Search);
        }
      } catch (error) {
        setMovies([]);
        setSearchingError(true);
      }
    }, 1000);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [movieTitle]);

  return { movies, searching, searchingError };
};

export default useFetch;
