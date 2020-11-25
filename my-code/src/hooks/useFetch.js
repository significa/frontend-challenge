import { useState, useEffect } from 'react';
import getMovies from '../services/getMovies';

const useFetch = movieTitle => {
  const [results, setResults] = useState(null);
  const [searching, setSearching] = useState(false);

  const minLength = movieTitle.trim().length > 3;

  useEffect(() => {
    if (!minLength) {
      setSearching(false);
      setResults(null);
      return;
    }
    setSearching(true);

    const debounceHandler = setTimeout(async () => {
      try {
        const response = await getMovies(movieTitle);
        setSearching(false);
        setResults(response);
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [movieTitle]);

  return { results, searching };
};

export default useFetch;
