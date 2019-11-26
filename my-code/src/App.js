import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
