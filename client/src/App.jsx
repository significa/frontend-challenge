import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import "./App.scss";

import Logo from "./images/2.Logos/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="logo" className="Logo"></img>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
