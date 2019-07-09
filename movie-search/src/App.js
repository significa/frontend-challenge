import React from "react"

import Theme from "./components/Provider"
import Routes from "./components/Routes"

const App = () => (
  <React.Fragment>
    <Theme>
      <Routes />
    </Theme>
  </React.Fragment>
)

export default App
