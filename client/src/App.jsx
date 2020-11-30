import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import SingleMovie from "./views/SingleMovie";
import "./App.scss";

import Logo from "./images/2.Logos/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={Logo} alt="logo" className="Logo"></img>
      <BrowserRouter>
        <Switch>
          <Route path="/movie/:id" component={SingleMovie} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
