import React from 'react';
import PropTypes from 'prop-types';
import HeartOutline from '../../../../assets/icons/icon-heart-white.svg';
import styles from './MovieCard.css';

const MovieCard = props => {
  const { title, year, id, cover } = props;

  return (
    <div className={styles.Wrapper} data-id={id}>
      <a title={title} href="">
        <img className={styles.Cover} alt={title} src={cover} />
        <div className={styles.HoverContent}>
          <HeartOutline className={styles.HeartIcon} />
          <div className={styles.InfoContent}>
            <h4 className={styles.Title}>{title}</h4>
            <span className={styles.Year}>{year}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default MovieCard;
