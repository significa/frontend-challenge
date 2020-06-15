import React from "react";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import MoviePage from "./Components/MoviePage";
import { Route } from "react-router-dom";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} alt="logo" width="150" />
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={MoviePage} />
    </div>
  );
}

export default App;
