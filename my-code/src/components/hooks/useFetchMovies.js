// @flow
import { useState, useEffect } from 'react';
import getMovies from '../services/getMovies';

export default function useFetchMovies(query: string) {
  const [movies, setMovies] = useState();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const isSearchable = (value) => value.trim().length > 3;

  useEffect(() => {
    if (!isSearchable(query)) {
      setError(false);
      setFetching(false);
      setMovies(null);
      return;
    }

    setFetching(true);

    const searchDebounce = setTimeout(async () => {
      try {
        const { ok, search } = await getMovies(query);
        if (ok) {
          setMovies(search);
          setError(false);
        } else {
          setError(true);
          setMovies([]);
        }
      } catch (error) {
        setError(true);
        setMovies([]);
      }

      setFetching(false);
    }, 500);

    return () => clearTimeout(searchDebounce);
  }, [query]);

  return { movies, fetching, error };
}
