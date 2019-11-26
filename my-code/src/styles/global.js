import { createGlobalStyle } from 'styled-components';
import variables from './variables';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${variables.COLOR_DARK};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: ${variables.FONT_SIZE_REGULAR};
    font-weight: ${variables.FONT_WEIGHT_REGULAR};
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
    background: ${variables.COLOR_DARK};
    color: ${variables.COLOR_SECONDARY};
    border: 1px solid ${variables.COLOR_SECONDARY};
    border-radius: ${variables.BORDER_RADIUS};
    padding: 12px 16px 12px 12px;

    &:hover {
      border-color: ${variables.COLOR_ACTIVE};
      color: ${variables.COLOR_DEFAULT};
    }

    &.active {
      background: ${variables.COLOR_RED};
      border-color: ${variables.COLOR_RED};
      color: ${variables.COLOR_DEFAULT};
    }
  }
`;
