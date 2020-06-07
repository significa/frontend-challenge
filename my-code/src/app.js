import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from './containers/Home'
import MovieInfo from './containers/MovieInfo'

export const App = () => (
	<Router history={createBrowserHistory()}>
		<Switch>
        	<Route exact path="/" component={Home}/>
       		<Route path="/movie-info" component={MovieInfo}/>
		</Switch>
	</Router>
)
