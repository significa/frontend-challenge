import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Panel } from 'primereact/panel';
import Search from '../../components/Search';
import LikeButton from '../../components/LikeButton';

import history from '../../services/history';

import { MoviesGrid } from './styles';

function Home({ movies }) {
  // states
  const [movieId, setMovieId] = useState(null);

  function handleMovieClick(id) {
    setMovieId(id);
    history.push('/movie');
  }

  return (
    <>
      <Search />

      <MoviesGrid className="p-grid">
        {movies.map(movie => (
          <div className="p-col-12 p-md-4 p-lg-3 p-xl-2" key={movie.imdbID}>
            <div
              className="movie-wrapper"
              onClick={() => handleMovieClick(movie.imdbID)}>
              <div
                className="movie-poster"
                style={{ backgroundImage: `url(${movie.Poster})` }}
              />

              <div className="movie-info">
                <LikeButton imdbID={movie.imdbID} />
                <span>
                  {movie.Title}
                  <br />
                  <small>{movie.Year}</small>
                </span>
              </div>
            </div>
          </div>
        ))}
      </MoviesGrid>
    </>
  );
}

export default connect(state => ({
  movies: state.movieReducer,
}))(Home);
