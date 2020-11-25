import React from 'react';
import PropTypes from 'prop-types';
import HeartOutline from '../../../../assets/icons/icon-heart-white.svg';
import styles from './MovieCard.css';

const MovieCard = ({ Title, Year, imdbID, Poster }) => {
  return (
    <div className={styles.Wrapper} data-id={imdbID}>
      <a title={Title} href="">
        <img className={styles.Cover} alt={Title} src={Poster} />
        <div className={styles.HoverContent}>
          <HeartOutline className={styles.HeartIcon} />
          <div className={styles.InfoContent}>
            <h4 className={styles.Title}>{Title}</h4>
            <span className={styles.Year}>{Year}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

MovieCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired
};

export default MovieCard;
