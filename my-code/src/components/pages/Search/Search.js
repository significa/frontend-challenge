import React, { useState, useEffect } from 'react';
import SearchBar from '../../shared/SearchBar';
import MovieCard from '../../shared/MovieCard';
import Layout from '../../shared/Layout';
import getMovies from '../../services/getMovies';
import styles from './Search.css';
import Skeleton from 'react-loading-skeleton';
import illustration from '../../../illustrations/illustration-empty-state.png';
import rottenLogo from '../../../icons/logo-rotten-tomatoes.svg';
import Link from 'next/link';

const MovieCardListSkeleton = () =>
  [...new Array(10).keys()].map((item) => (
    <div data-testid="Skeleton" key={`skeleton_${item}`}>
      <Skeleton className={styles.MovieCardSkeleton} />
    </div>
  ));

const InitialPage = () => (
  <div className={styles.InitialPage}>
    <Link shallow="true" href="/movie/[id]" as={'/movie/tt0068646'}>
      <a className={styles.Offer}>
        <img className={styles.Illustration} src={illustration} />
        <h3 className={styles.OfferHeading}>Don&apos;t know what to search?</h3>
        <span className={styles.OfferText}>Here&apos;s an offer you can&apos;t refuse</span>
      </a>
    </Link>
  </div>
);

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState();
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const isSearchable = (value) => value.trim().length > 3;

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  useEffect(() => {
    if (!isSearchable(searchQuery)) {
      setError(false);
      setFetching(false);
      setMovies(null);
      return;
    }

    setFetching(true);

    const searchDebounce = setTimeout(async () => {
      try {
        const { ok, search } = await getMovies(searchQuery);
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
  }, [searchQuery]);

  return (
    <Layout>
      <SearchBar className={styles.SearchBar} value={searchQuery} onChange={handleChange} />
      {!movies && !fetching ? (
        <InitialPage />
      ) : movies && movies.length === 0 ? (
        <div className={styles.ErrorPage}>
          <img className={styles.ErrorIllustration} src={rottenLogo} />
          <h3 className={styles.OfferHeading}>{error ? 'Ops, something went wrong :/' : 'Movie not found :/'}</h3>
        </div>
      ) : (
        <div className={styles.MoviesList}>
          {fetching ? (
            <MovieCardListSkeleton />
          ) : (
            movies.map(({ imdbID, Title, Year, Poster }) => (
              <MovieCard
                key={imdbID}
                className={styles.MovieCard}
                id={imdbID}
                title={Title}
                year={Year}
                poster={Poster}
              />
            ))
          )}
        </div>
      )}
    </Layout>
  );
};

export default SearchPage;
