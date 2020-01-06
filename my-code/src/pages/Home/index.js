import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Search from '../../components/Search';
import LikeButton from '../../components/LikeButton';
import history from '../../services/history';
import { fetchData } from '../../services/api';
import { MoviesGrid } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  // Redux state: get the movies list.
  const movies = useSelector(state => {
    return state.movieReducer;
  });

  /**
   * Fetches data from the API.
   * @param {integer} currentPage
   */
  async function getData(currentPage) {
    const searchResult = await fetchData(movies.searchStr, currentPage, 10);

    dispatch({
      type: 'ADD_MOVIES',
      movies: searchResult,
    });
  }

  /**
   * Handles the click on a movie poster.
   * Loads the Movie page.
   * @param {*} id
   */
  function handleMovieClick(id) {
    history.push(`/movie?imdbID=${id}`);
  }

  /**
   * Handles the click on a page number.
   * @param {*} Object
   */
  function handlePageClick({ selected }) {
    const newPage = parseInt(selected, 10) + 1;
    getData(newPage);
  }

  return (
    <>
      <Search />

      <MoviesGrid className="p-grid">
        {movies.list.map((movie, index) => (
          <div className="p-col-12 p-md-4 p-lg-3 p-xl-2" key={movie.imdbID}>
            <div
              className="movie-wrapper"
              onClick={() => handleMovieClick(movie.imdbID)}
              onKeyDown={() => handleMovieClick(movie.imdbID)}
              role="button"
              tabIndex={index}>
              {movie.Poster !== 'N/A' && (
                <div
                  className="movie-poster"
                  style={{ backgroundImage: `url(${movie.Poster})` }}
                />
              )}
              {movie.Poster === 'N/A' && (
                <div className="movie-no-poster">
                  {movie.Title} <br />
                  <span className="poster-not-found">(No poster)</span>
                </div>
              )}

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

      {movies.pageCount > 0 && (
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          disableInitialCallback
          initialPage={movies.page}
          pageCount={movies.pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      )}
    </>
  );
}
