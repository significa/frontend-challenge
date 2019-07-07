
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header'
import { Flex } from '../components/Layout'
import NotFound from '../components/NotFound'

const Routes = () => (
    <BrowserRouter>
        <Flex>
        <Route path="/" component={Header} />
            <Switch>
                <Route exact path="/" component={NotFound} />
                <Route exact path="/movies/:id" component={NotFound} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Flex>
    </BrowserRouter>
);

export default Routes;