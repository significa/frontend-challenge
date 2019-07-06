
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound'
import MoviesPage from '../containers/MoviesPage';
import MoviePage from '../containers/MoviePage';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={MoviesPage} />
        <Route exact path="/Movies/:id" component={MoviePage} />
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes;