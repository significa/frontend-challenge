// @flow
import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import App from "./App"

import theme from "./styles/theme"
import GlobalStyle from "./styles/styles"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <App />
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById("root")
)
