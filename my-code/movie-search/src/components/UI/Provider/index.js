import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';

import reset from './reset';
import colors from './colors';

const defaultStyles = () => injectGlobal`
  ${reset}

  html {
    -webkit-overflow-scrolling: touch;

  	box-sizing: border-box;

  	-webkit-tap-highwhite-color: transparent;
  	-webkit-text-size-adjust: 100%;
  	-ms-text-size-adjust: 100%;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	text-rendering: optimizeLegibility;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    overflow: hidden;
  }

  ::selection {
    background-color: ${colors.green.default};
    color: ${colors.white}
  }
`;

defaultStyles();

const Provider = ({ children }) => <div>{children}</div>

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired
}

export default Provider;
