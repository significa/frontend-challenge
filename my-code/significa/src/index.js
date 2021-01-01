import React from "react";
import ReactDOM from "react-dom";
import { Router, Redirect } from "@reach/router";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Home from "./pages/Home";
import Movie from "./pages/Movie";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home path="/" />
      <Movie path="/movie/:movieId" />
      <Redirect from="/movie/" to="/movie/not-found" noThrow />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
