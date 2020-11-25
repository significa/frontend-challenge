import { useState, useEffect } from 'react';
import getMovies from '../services/getMovies';

const useFetch = movieTitle => {
  const [movies, setMovies] = useState(null);
  const [searching, setSearching] = useState(false);

  const minLength = movieTitle.trim().length > 3;

  useEffect(() => {
    if (!minLength) {
      setSearching(false);
      setMovies(null);
      return;
    }
    setSearching(true);

    const debounceHandler = setTimeout(async () => {
      try {
        const { Search } = await getMovies(movieTitle);
        setSearching(false);
        setMovies(Search);
      } catch (error) {
        console.log(error);
      }
    }, 1000);

    return () => {
      clearTimeout(debounceHandler);
    };
  }, [movieTitle]);

  return { movies, searching };
};

export default useFetch;
