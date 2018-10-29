// @flow
import React from "react"
import ReactDOM from "react-dom"
import Routes from "./routes"
import Provider from "./components/Provider"

// Error handling on root Element
const root = document.getElementById("root")
if (root == null) {
  throw new Error("No root element present on the HTML")
}

ReactDOM.render(
  <React.Fragment>
    <Provider>
      <Routes />
    </Provider>
  </React.Fragment>,
  root
)
