import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ls from "local-storage";
import Home from "./views/Home";
import SingleMovie from "./views/SingleMovie";
import "./App.scss";

import Logo from "./images/2.Logos/logo.svg";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteMovies = ls.get("favoriteMovies") || [];
    setFavorites(favoriteMovies);
  }, []);

  return (
    <div className="App col-sm-11">
      <img src={Logo} alt="logo" className="Logo"></img>
      <BrowserRouter>
        <Switch>
          <Route
            path="/movie/:id"
            render={(props) => (
              <SingleMovie
                {...props}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            )}
          />
          <Route
            path="/"
            render={(props) => <Home {...props} favorites={favorites} />}
            exact
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
