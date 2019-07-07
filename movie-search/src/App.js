import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <main id="app">
              <Routes />
          </main>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;