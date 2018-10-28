import React from 'react';
import PropTypes from 'prop-types';

import MovieDetailsList from './movieDetailsList/MovieDetailsList';
import RatingButton from './ratingButton/RatingButton';
import FavouriteButton from './favouriteButton/FavouriteButton';

import styles from './MovieDetails.module.scss';

import imdb from '../../img/imdb.svg';
import rottenTomatoes from '../../img/rottenTomatoes.svg';

function fetchRating(movie, index) {
  if (typeof movie.Ratings[index] !== 'undefined') {
    return movie.Ratings[index].Value;
  }
  return '0%';
}

const MovieDetails = ({ movie }) => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
      <div className={styles.movieDetails}>
        <span>
          {movie.Runtime}
          {' '}
          ·
          {' '}
          {movie.Year}
          {' '}
          ·
        </span>
        <span className={styles.movieDetailsBadge}>{movie.Rated}</span>
      </div>
      <h1 className={styles.movieDetailsTitle}>{movie.Title}</h1>
      <div className={styles.movieDetailsRatingContainer}>
        <div className={styles.ratingButtonsContainer}>
          <RatingButton img={imdb} value={fetchRating(movie, 0)} />
          <RatingButton img={rottenTomatoes} value={fetchRating(movie, 1)} />
        </div>
        <div className={styles.favouriteButtonContainer}>
          <FavouriteButton title="Add to favourites" movie={movie} />
        </div>
      </div>
      <section className={styles.movieDetailsPlot}>
        <span className={styles.movieSectionTitle}>Plot</span>
        <p className={styles.moviePlot}>{movie.Plot}</p>
      </section>
      <section className={styles.movieDetailsFooter}>
        <MovieDetailsList title="Cast" list={movie.Actors} />
        <MovieDetailsList title="Genre" list={movie.Genre} />
        <MovieDetailsList title="Director" list={movie.Director} />
      </section>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-6">
      <div className={styles.movieDetailsImageContainer}>
        <div style={{ backgroundImage: `url(${movie.Poster === 'N/A' ? 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png' : movie.Poster})` }} className={styles.movieDetailsImage} />
      </div>
    </div>
  </div>
);


MovieDetails.propTypes = {
  movie: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

MovieDetails.defaultProps = {
  movie: null,
};

export default MovieDetails;
