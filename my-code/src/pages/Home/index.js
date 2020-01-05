import React from 'react';
import { useSelector } from 'react-redux';
import 'primereact/panel';
import Search from '../../components/Search';
import LikeButton from '../../components/LikeButton';
import history from '../../services/history';
import { MoviesGrid } from './styles';

export default function Home() {
  // Redux state: get the movies list.
  const movies = useSelector(state => {
    return state.movieReducer;
  });

  /**
   * Handles the click on a movie poster.
   * Loads the Movie page.
   * @param {*} id
   */
  function handleMovieClick(id) {
    history.push(`/movie?imdbID=${id}`);
  }

  return (
    <>
      <Search />

      <MoviesGrid className="p-grid">
        {movies.list.map(movie => (
          <div className="p-col-12 p-md-4 p-lg-3 p-xl-2" key={movie.imdbID}>
            <div
              className="movie-wrapper"
              onClick={() => handleMovieClick(movie.imdbID)}>
              <div
                className="movie-poster"
                style={{ backgroundImage: `url(${movie.Poster})` }}
              />

              <div className="movie-btn-like">
                <LikeButton imdbID={movie.imdbID} />
              </div>

              <div className="movie-info">
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
