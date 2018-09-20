import React from "react";
import { Switch, Route } from "react-router-dom";

import MovieSearch from "../views/MovieSearch";
import MovieDetails from "../containers/MovieDetails";

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={MovieSearch} />
      <Route exact path="/movies/:imdbID" component={MovieDetails} />
    </Switch>
  </div>
);
