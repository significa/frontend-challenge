import React from "react"
import { BrowserRouter } from "react-router-dom"

import Theme from "./components/Theme"
import Routes from "./components/Routes"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => (
  <BrowserRouter>
    <Theme>
      <React.Fragment>
        <Header />
        <Routes />
        <Footer />
      </React.Fragment>
    </Theme>
  </BrowserRouter>
)

export default App
