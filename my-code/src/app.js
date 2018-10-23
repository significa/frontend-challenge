'use strict'

import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from 'components/header'
import Home from './views/home'
import './app.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showcase: []
    }
    this.handleSearch = (e) => {
      e.preventDefault()
      const value = e.target.search.value
      fetch(`http://www.omdbapi.com/?s=${value}&apikey=296eb63f`)
        .then(response => response.json())
        .then((data) => {
          const result = data.Search
          this.setState({showcase: result})
          console.log(this.state.showcase)
        })
    }
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={(...props) => <Home
              handleSearch={this.handleSearch}
              items={this.state.showcase}
            />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
