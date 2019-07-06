import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './components/Routes';
import './App.css';

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