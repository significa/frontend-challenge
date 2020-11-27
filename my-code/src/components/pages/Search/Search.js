import React, { useState } from 'react';
import EmptyState from './EmptyState';
import NotFound from './NotFound';
import MovieCard from './MovieCard';
import MovieCardSkeleton from './MovieCardSkeleton';
import Layout from '../../shared/Layout';
import SearchBar from '../../shared/SearchBar';
import useFetch from '../../../hooks/useFetch';
import styles from './Search.css';

const Search = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const { movies, searching, searchingError } = useFetch(searchTitle);

  const handlerChange = e => {
    setSearchTitle(e.target.value);
  };

  return (
    <Layout>
      <SearchBar onChange={handlerChange} value={searchTitle} />
      {searchingError && <NotFound />}
      {!movies && !searching && <EmptyState />}
      <div className={styles.MovieListContent}>
        {searching &&
          !searchingError &&
          [...new Array(10).keys()].map(item => (
            <MovieCardSkeleton key={item} />
          ))}
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
