import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { movieSearch, movieDetails } from './api'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: "",
      results: false
    }

    this.changeText = this.changeText.bind(this)
    this.getMovies = this.getMovies.bind(this)
    this.getDetails = this.getDetails.bind(this)
  }

  changeText(event) {
    this.setState({
      search: event.target.value
    })
  }

  async getDetails(id) {
    let details = await movieDetails(id)
    console.log(details)
  }

  async getMovies() {
    let search = await movieSearch(this.state.search)
    console.log(search)    
    this.setState({results: search.Search})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" value={this.state.search} onChange={this.changeText}/>
        <button onClick={this.getMovies}>Click</button>
        {this.state.results && 
          <ul>
            {this.state.results.map(cur => {
              return (<li key={cur.imdbID} onClick={() => this.getDetails(cur.imdbID)}>{cur.Title}</li>)
            })}
          </ul>
        }
      </div>
    );
  }
}

export default App;
