import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/movie/:id" component={MoviePage} />
		</Switch>
	);
}
