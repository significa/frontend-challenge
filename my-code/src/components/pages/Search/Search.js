// @flow

import * as React from 'react';
import SearchBar from '../../shared/SearchBar';
import MovieCard from '../../shared/MovieCard';
import Layout from '../../shared/Layout';
import styles from './Search.css';
import Skeleton from 'react-loading-skeleton';
import illustration from '../../../illustrations/illustration-empty-state.png';
import rottenLogo from '../../../icons/logo-rotten-tomatoes.svg';
import Link from 'next/link';
import useFetchMovies from '../../hooks/useFetchMovies';

type fetchTypes = {
  movies: ?Array<{
    Title: string,
    Year: string,
    imdbID: string,
    Poster: string
  }>,
  fetching: boolean,
  error: boolean
};

const MovieCardListSkeleton = () =>
  [...new Array(10).keys()].map((item) => (
    <div data-testid="Skeleton" key={`skeleton_${item}`}>
      <Skeleton className={styles.MovieCardSkeleton} />
    </div>
  ));

const InitialPage = () => (
  <div className={styles.InitialPage}>
    <Link shallow href="/movie/[id]" as={'/movie/tt0068646'}>
      <a className={styles.Offer}>
        <img className={styles.Illustration} src={illustration} />
        <h3 className={styles.OfferHeading}>Don&apos;t know what to search?</h3>
        <span className={styles.OfferText}>Here&apos;s an offer you can&apos;t refuse</span>
      </a>
    </Link>
  </div>
);

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { fetching, error, movies }: fetchTypes = useFetchMovies(searchQuery);

  const handleChange = (e: SyntheticInputEvent<EventTarget>) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const renderContent = () => {
    if (!movies && !fetching) {
      return <InitialPage />;
    }

    if (movies && movies.length === 0) {
      return (
        <div className={styles.ErrorPage}>
          <img className={styles.ErrorIllustration} src={rottenLogo} />
          <h3 className={styles.OfferHeading}>{error ? 'Ops, something went wrong :/' : 'Movie not found :/'}</h3>
        </div>
      );
    }

    if (fetching) {
      return (
        <div className={styles.MoviesList}>
          <MovieCardListSkeleton />
        </div>
      );
    }

    return (
      <div className={styles.MoviesList}>
        {movies?.map(({ imdbID, Title, Year, Poster }) => (
          <MovieCard key={imdbID} className={styles.MovieCard} id={imdbID} title={Title} year={Year} poster={Poster} />
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <SearchBar className={styles.SearchBar} value={searchQuery} onChange={handleChange} />
      {renderContent()}
    </Layout>
  );
}
