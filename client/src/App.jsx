import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ls from "local-storage";
import Home from "./views/Home";
import SingleMovie from "./views/SingleMovie";
import { LOCALSTORAGE_KEY } from "./constants";
import "./App.scss";

import logo from "./images/2.Logos/logo.svg";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteMovies = ls.get(LOCALSTORAGE_KEY) || [];
    setFavorites(favoriteMovies);
  }, []);

  return (
    <div className="App col-sm-11 col-md-9">
      <img src={logo} alt="What's in - logo" className="Logo"></img>
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
