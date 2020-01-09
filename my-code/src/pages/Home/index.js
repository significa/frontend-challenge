import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import ImageFadeIn from 'react-image-fade-in';

import { getMovies } from '../../store/modules/movie/reducer';
import Search from '../../components/Search';
import LikeButton from '../../components/LikeButton';
import LoadingIndicator from '../../components/LoadingIndicator';
import history from '../../services/history';
import { fetchMovieData } from '../../services/api';
import { Container, MoviesGrid } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  // States
  const [isLoading, setIsLoading] = useState(false);

  // Redux state: get the movies list.
  const movies = useSelector(getMovies);

  /**
   * Fetches movie data from the API.
   * @param {integer} currentPage
   */
  async function getMovieData(currentPage = 1) {
    setIsLoading(true);
    const searchResult = await fetchMovieData(
      movies.searchStr,
      currentPage,
      10
    );

    dispatch({
      type: 'ADD_MOVIES',
      movies: searchResult,
    });

    setIsLoading(false);
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
    getMovieData(newPage);
  }

  return (
    <Container>
      <Search />

      {isLoading && <LoadingIndicator text="Searching movies database..." />}

      {!isLoading && (
        <MoviesGrid className="p-grid p-justify-center">
          {movies.list.map((movie, index) => (
            <div className="p-col-12 p-md-5 p-lg-4 p-xl-3 " key={movie.imdbID}>
              <div
                className="movie-wrapper"
                onClick={() => handleMovieClick(movie.imdbID)}
                onKeyDown={() => handleMovieClick(movie.imdbID)}
                role="button"
                tabIndex={index}>
                {movie.Poster !== 'N/A' && (
                  <ImageFadeIn
                    className="movie-poster"
                    src={movie.Poster}
                    loadAsBackgroundImage
                    opacityTransition={1}
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
      )}

      {!isLoading && movies.pageCount > 0 && (
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
    </Container>
  );
}
