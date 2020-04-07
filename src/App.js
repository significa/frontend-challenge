import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
	return (
		<Router>
			<Routes />
			<GlobalStyle />
		</Router>
	);
}
