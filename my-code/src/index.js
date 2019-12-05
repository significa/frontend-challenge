import React from "react"
import ReactDOM from "react-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import App from "./App"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff4040"
    },
    secondary: {
      main: "#ff9f1c"
    },
    text: {
      primary: "#ffffff",
      secondary: "#353f4c"
    },
    background: {
      default: "#0a1014",
      paper: "#ffffff"
    }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme} children={<App />} />,
  document.getElementById("root")
)
