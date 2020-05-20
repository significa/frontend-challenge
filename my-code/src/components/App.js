import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { FetchMovie } from "./FetchMovie";
import { Movies } from "./Movies";

export function App() {
    return (
        <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">MOVIE SEARCH!</a>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Movies />
                    </Route>
                    <Route path="/title/:id">
                        <FetchMovie />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}