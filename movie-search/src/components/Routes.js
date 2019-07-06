
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound'
import ProductsPage from '../containers/ProductsPage';
import ProductPage from '../containers/ProductPage';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/Products/:id" component={ProductPage} />
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes;