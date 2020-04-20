import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';

//css
import { GlobalStyle } from './Styles/styles';

///
function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route path='/' exact>
						<Movies />
					</Route>
					<Route path='/:id'>
						<MovieDetails />
					</Route>
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
