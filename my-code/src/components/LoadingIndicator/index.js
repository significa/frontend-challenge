import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function LoadingIndicator({ text }) {
  return <Container>{text}</Container>;
}

LoadingIndicator.propTypes = {
  text: PropTypes.string.isRequired,
};
