import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingButton.module.scss';

const RatingButton = ({ img, value }) => (
  <div className={styles.movieDetailsRating}>
    <img src={img} alt="IMDB" />
    <span>{value}</span>
  </div>
);

RatingButton.propTypes = {
  img: PropTypes.string,
  value: PropTypes.string,
};

RatingButton.defaultProps = {
  img: null,
  value: null,
};

export default RatingButton;
