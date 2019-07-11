import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "styled-components"

import theme from "./theme"
import GlobalStyle from "./styles"

const Theme = ({ children }) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    <GlobalStyle />
  </React.Fragment>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired
}

export default Theme
