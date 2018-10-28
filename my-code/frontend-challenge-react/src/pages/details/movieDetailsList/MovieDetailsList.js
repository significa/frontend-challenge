import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetailsList.module.scss';

function splitString(list) {
  if (list.includes(', ')) {
    return (list.split(', ').map(actor => <li key={actor}>{actor}</li>));
  }
  return <li>{list}</li>;
}

const MovieDetailsList = ({ title, list }) => (
  <div className={styles.movieDetailsList}>
    <span className={styles.movieSectionTitle}>{title}</span>
    <ul className={styles.movieSectionList}>
      {splitString(list)}
    </ul>
  </div>
);

MovieDetailsList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.string,
};

MovieDetailsList.defaultProps = {
  title: null,
  list: '',
};

export default MovieDetailsList;
