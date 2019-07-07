import React from "react"
import ReactDOM from "react-dom"

import Routes from "./routes/Routes"
import Provider from "./components/Provider"

const root = document.getElementById("root")
if (root === null) {
  throw new Error("Error! No root Element")
}

ReactDOM.render(
  <React.Fragment>
    <Provider>
      <Routes />
    </Provider>
  </React.Fragment>,
  root
)
