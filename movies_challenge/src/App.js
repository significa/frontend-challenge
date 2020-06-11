import React from "react";
import Home from "./Components/Home";
import MoviePage from "./Components/MoviePage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={MoviePage} />
    </div>
  );
}

export default App;
