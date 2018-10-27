import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../pages/search/Search.module.scss';

const MovieDetailsList = ({ title, list }) => (
  <div className={styles.movieDetailsList}>
    <span className={styles.movieSectionTitle}>{title}</span>
    <ul className={styles.movieSectionList}>
      {list.split(', ').map(actor => <li key={actor}>{actor}</li>)}
    </ul>
  </div>
);

MovieDetailsList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.string,
};

MovieDetailsList.defaultProps = {
  title: null,
  list: null,
};

export default MovieDetailsList;
