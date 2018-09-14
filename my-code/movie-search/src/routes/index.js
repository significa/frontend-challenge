import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieSearch from '../views/MovieSearch';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={MovieSearch} />
    </Switch>
  </div>
)
