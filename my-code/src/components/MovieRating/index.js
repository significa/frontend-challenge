import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import logoImdb from '../../assets/logo-imdb.svg';
import logoRotten from '../../assets/logo-rotten-tomatoes.svg';

export default function MovieRating({ rating }) {
  let logo;
  let logoCssClass;

  if (rating.Source === 'Internet Movie Database') {
    logo = logoImdb;
    logoCssClass = 'logo-imdb';
  } else {
    logo = logoRotten;
    logoCssClass = 'logo-rotten';
  }

  return (
    <Container>
      <span className={logoCssClass}>
        <img src={logo} alt="Logo" />
      </span>
      <span className="value">{rating.Value}</span>
    </Container>
  );
}

MovieRating.propTypes = {
  rating: PropTypes.shape({
    Source: PropTypes.string.isRequired,
    Value: PropTypes.string.isRequired,
  }),
};

MovieRating.defaultProps = {
  rating: {},
};
