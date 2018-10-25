import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from 'components/header'
import Home from './views/home'
import Movie from './views/movie'
import './app.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showcase: [],
      searchEmpty: '',
      loaderShowcase: 'hide',
      movieEmpty: 'hide'
    }
    this.handleSearch = (e) => {
      e.preventDefault()
      const value = e.target.search.value
      this.setState({
        loaderShowcase: 'show',
        showcase: [],
        movieEmpty: 'hide'
      })
      if (value === '') {
        this.setState({
          loaderShowcase: 'hide',
          searchEmpty: 'error',
          movieEmpty: 'hide'
        })
        return
      }
      fetch(`http://www.omdbapi.com/?type=movie&s=${value}&apikey=296eb63f`)
        .then(response => response.json())
        .then((data) => {
          const status = data.Response
          const result = data.Search
          if (status === 'False') {
            this.setState({
              searchEmpty: '',
              loaderShowcase: 'hide',
              movieEmpty: 'show'
            })
            return
          }
          this.setState({
            searchEmpty: '',
            movieEmpty: 'hide',
            showcase: result,
            loaderShowcase: 'hide'
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
              loaderShowcase={this.state.loaderShowcase}
              movieEmpty={this.state.movieEmpty}
            />} />
            <Route path='/movie-:id' component={Movie} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
