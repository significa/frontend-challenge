import React from "react";
import PropTypes from "prop-types";
import { injectGlobal } from "styled-components";

import reset from "./reset";
import colors from "./colors";

const defaultStyles = () => injectGlobal`
  ${reset}

  html {
  	box-sizing: border-box;
  	text-rendering: optimizeLegibility;
  	-moz-osx-font-smoothing: grayscale;
  	-ms-text-size-adjust: 100%;
  	-webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highwhite-color: transparent;
  	-webkit-text-size-adjust: 100%;
  }

  body {
    background-color: ${colors.greyscale.black};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    overflow: hidden;
  }

  ::selection {
    background-color: ${colors.green};
    color: ${colors.white}
  }
`;

defaultStyles();

const Provider = ({ children }) => <div>{children}</div>;

Provider.propTypes = {
  children: PropTypes.shape({}).isRequired
};

export default Provider;
