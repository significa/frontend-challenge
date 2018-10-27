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
      movieEmpty: 'hide',
      statusMovie: 'hide',
      statusEmpty: 'hide',
      statusWelcome: 'show',
      movie: {}
    }
    this.handleSearch = (e) => {
      e.preventDefault()
      const value = e.target.search.value
      this.setState({
        loaderShowcase: 'show',
        showcase: [],
        movieEmpty: 'hide',
        statusWelcome: 'hide'
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
    this.handleGetMovie = (id) => () => {
      const imdbID = id
      fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=296eb63f`)
        .then(response => response.json())
        .then((data) => {
          if (data.Response === 'False') {
            this.setState({
              statusEmpty: 'show'
            })
            return
          }
          this.setState({
            movie: data,
            statusMovie: 'show',
            statusEmpty: 'hide'
          })
        })
    }
    this.handleBack = () => {
      this.setState({
        movie: {},
        showcase: [],
        statusMovie: 'hide',
        statusEmpty: 'hide',
        statusWelcome: 'show'
      })
    }
  }
  componentDidMount () {
    const url = window.location.href
    if (url.indexOf('movie') > 0) {
      const imdbID = url.split('-')[1]
      fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=296eb63f`)
        .then(response => response.json())
        .then((data) => {
          if (data.Response === 'False') {
            this.setState({
              statusEmpty: 'show'
            })
            return
          }
          this.setState({
            movie: data,
            statusMovie: 'show'
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
              handleGetMovie={this.handleGetMovie}
              statusWelcome={this.state.statusWelcome}
            />} />
            <Route path='/movie-:id' render={(...props) => <Movie
              movie={this.state.movie}
              handleBack={this.handleBack}
              status={this.state.statusMovie}
              statusEmpty={this.state.statusEmpty} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
