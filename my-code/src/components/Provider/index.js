// @flow
import * as React from "react"
import { ThemeProvider } from "styled-components"

import theme from "./theme"
import GlobalStyle from "./styles"

const Provider = ({ children }: React.Node) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    <GlobalStyle />
  </React.Fragment>
)

export default Provider
