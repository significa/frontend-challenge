// @flow
import * as React from "react"
import { ThemeProvider } from "styled-components"

import theme from "./theme"
import GlobalStyle from "./styles"

type PropsType = {
  children: React.Node
}

const Provider = ({ children }: PropsType) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    <GlobalStyle />
  </React.Fragment>
)

export default Provider
