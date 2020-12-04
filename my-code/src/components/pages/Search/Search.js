import React, { useState } from 'react';
import SearchBar from './SearchBar';
import EmptyState from './EmptyState';
import MovieCard from './MovieCard';
import MovieCardSkeleton from './MovieCardSkeleton';
import Layout from '../../shared/Layout';
import NotFound from '../../shared/NotFound';
import useFetch from '../../../hooks/useFetch';
import styles from './Search.css';

const Search = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const { movies, searching, searchingError } = useFetch(searchTitle);

  const handlerChange = e => {
    setSearchTitle(e.target.value);
  };

  const renderSearchingErrorState = () => {
    if (searchingError) {
      return <NotFound />;
    }
  };

  const renderEmptyState = () => {
    if (!movies && !searching) {
      return <EmptyState />;
    }
  };

  const renderLoaderState = () => {
    if (searching && !searchingError) {
      return [...new Array(10).keys()].map(item => (
        <MovieCardSkeleton key={item} />
      ));
    }
  };

  return (
    <Layout>
      <SearchBar onChange={handlerChange} searchTitle={searchTitle} />
      {renderSearchingErrorState()}
      {renderEmptyState()}
      <div className={styles.MovieListContent}>
        {renderLoaderState()}
        {movies &&
          !searching &&
          movies.map(item => (
            <MovieCard
              Title={item.Title}
              Year={item.Year}
              imdbID={item.imdbID}
              Poster={item.Poster}
              key={item.imdbID}
            />
          ))}
      </div>
    </Layout>
  );
};

export default Search;
