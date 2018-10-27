import React from 'react';
import PropTypes from 'prop-types';
import MovieDetailsList from '../../components/movieDetailsList/MovieDetailsList';
import styles from '../search/Search.module.scss';

const MovieDetails = ({ movie }) => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
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
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
      <div className={styles.movieDetailsImageContainer}>
        <div style={{ backgroundImage: `url(${movie.Poster === 'N/A' ? 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png' : movie.Poster})` }} className={styles.movieDetailsImage} />
      </div>
    </div>
  </div>
);

MovieDetails.propTypes = {
  movie: PropTypes.element,
};

MovieDetails.defaultProps = {
  movie: null,
};

export default MovieDetails;
