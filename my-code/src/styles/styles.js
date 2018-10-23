// @flow
import { createGlobalStyle } from "styled-components"

import reset from "./reset"
import theme from "./theme"
import fonts from "./fonts"

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  
  body {
    background-color: ${theme.color.grey.dark};
    color: ${theme.color.grey.white};

    font-family: ${theme.font.family};
    font-size: ${theme.font.base};

    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`

export default GlobalStyle
