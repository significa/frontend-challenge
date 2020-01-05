import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import api, { API_KEY } from '../../services/api';
import history from '../../services/history';
import { Container, Loading } from './styles';
import arrowBack from '../../assets/icon-arrow-grey.svg';
import LikeButton from '../../components/LikeButton';
import MovieRating from '../../components/MovieRating';

export default function Movie(props) {
  // states
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const params = queryString.parse(props.location.search);
      const response = await api.get('/', {
        params: { apikey: API_KEY, i: params.imdbID },
      });

      setMovie(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  /**
   * Handles the click on the back button
   * and send the user back to the results page.
   */
  const handleBack = () => {
    history.push('/');
  };

  return (
    <Container>
      <div>
        <button className="btn-back" type="button" onClick={() => handleBack()}>
          <img src={arrowBack} alt="Back button" />
        </button>
      </div>
      {isLoading ? (
        <Loading>Loading movie information...</Loading>
      ) : (
        <div className="p-grid">
          <div className="p-col-12 p-md-7">
            <div className="movie-attributes">
              <span className="movie-runtime">{movie.Runtime}</span>
              <span className="movie-attributes-separator">&middot;</span>
              <span className="movie-year">{movie.Year}</span>
              <span className="movie-attributes-separator">&middot;</span>
              <span className="movie-rated">{movie.Rated}</span>
            </div>
            <div className="movie-title">{movie.Title}</div>
            <div className="movie-ratings">
              {movie.Ratings.map(rating => {
                if (rating.Source !== 'Metacritic') {
                  return <MovieRating rating={rating} key={rating.Source} />;
                }
                return '';
              })}

              <LikeButton imdbID={movie.imdbID} showText alwaysVisible />
            </div>
            <div className="movie-plot">
              <span className="label">Plot</span>
              {movie.Plot}
            </div>
            <div className="movie-people">
              <div className="p-grid">
                <div className="p-col-12 p-md-5">
                  <span className="label">Cast</span>
                  {movie.Actors.split(',').map(item => {
                    return <p key={item}>{item}</p>;
                  })}
                </div>
                <div className="p-col-12 p-md-3">
                  <span className="label">Genre</span>
                  {movie.Genre.split(',').map(item => {
                    return <p key={item}>{item}</p>;
                  })}
                </div>
                <div className="p-col-12 p-md-4">
                  <span className="label">Director</span>
                  {movie.Director.split(',').map(item => {
                    return <p key={item}>{item}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="p-col-12 p-md-5">
            <div className="movie-poster">
              <img src={movie.Poster} alt="Poster" />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
