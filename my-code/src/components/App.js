import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AllMoviesSearch } from "./AllMoviesSearch";
import { SingleMovieSearch } from "./SingleMovieSearch";

export function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">MOVIE SEARCH!</a>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <AllMoviesSearch />
                    </Route>
                    <Route path="/title/:id">
                        <SingleMovieSearch />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}