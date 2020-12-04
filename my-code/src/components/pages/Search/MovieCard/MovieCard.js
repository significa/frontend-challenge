import React, { useState } from 'react';
import PropTypes from 'prop-types';
import iconHeartOutline from '../../../../assets/icons/icon-heart-white.svg';
import iconHeartFull from '../../../../assets/icons/icon-heart-full.svg';
import posterNotFound from '../../../../assets/icons/icon-poster-not-found.svg';
import styles from './MovieCard.css';
import useFavourite from '../../../../hooks/useFavourite';

const MovieCard = ({ Title, Year, imdbID, Poster }) => {
  const [posterError, setPosterError] = useState(false);
  const { handlerFavourite, handlerToggle } = useFavourite(imdbID);

  const onErrorHandler = e => {
    setPosterError(true);
    e.target.className = `${e.target.className} ${styles.PosterNotFound}`;
    e.target.src = posterNotFound;
  };

  return (
    <div
      className={
        posterError ? `${styles.Wrapper} ${styles.PosterError}` : styles.Wrapper
      }
      data-id={imdbID}
    >
      <img
        className={styles.Cover}
        onError={onErrorHandler}
        alt={Title}
        src={Poster}
      />
      <div className={styles.HoverContent}>
        <a
          title={Title}
          className={styles.InfoContent}
          href={`/movie/${imdbID}`}
        >
          <h4 className={styles.Title}>{Title}</h4>
          <span className={styles.Year}>{Year}</span>
        </a>
        <button onClick={handlerToggle} className={styles.LikeButton}>
          <img src={handlerFavourite ? iconHeartFull : iconHeartOutline} />
        </button>
      </div>
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
