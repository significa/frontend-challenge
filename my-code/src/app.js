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
      showcase: [],
      searchEmpty: ''
    }
    this.handleSearch = (e) => {
      e.preventDefault()
      const value = e.target.search.value
      if (value === '') {
        this.setState({searchEmpty: 'error'})
        return
      }
      fetch(`http://www.omdbapi.com/?type=movie&s=${value}&apikey=296eb63f`)
        .then(response => response.json())
        .then((data) => {
          const result = data.Search
          this.setState({
            searchEmpty: '',
            showcase: result
          })
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
              searchEmpty={this.state.searchEmpty}
            />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
