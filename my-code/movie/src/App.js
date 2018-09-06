import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './routes/home'
import Details from './routes/details'

import { movieSearch, movieDetails } from './api'

const movies = {"Search":[{"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","imdbID":"tt0076759","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"Star Wars: Episode V - The Empire Strikes Back","Year":"1980","imdbID":"tt0080684","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},{"Title":"Star Wars: Episode VI - Return of the Jedi","Year":"1983","imdbID":"tt0086190","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Star Wars: The Force Awakens","Year":"2015","imdbID":"tt2488496","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"},{"Title":"Star Wars: Episode I - The Phantom Menace","Year":"1999","imdbID":"tt0120915","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Star Wars: Episode III - Revenge of the Sith","Year":"2005","imdbID":"tt0121766","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"},{"Title":"Star Wars: Episode II - Attack of the Clones","Year":"2002","imdbID":"tt0121765","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"},{"Title":"Star Trek","Year":"2009","imdbID":"tt0796366","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"},{"Title":"Rogue One: A Star Wars Story","Year":"2016","imdbID":"tt3748528","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"},{"Title":"Star Trek: Into Darkness","Year":"2013","imdbID":"tt1408101","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg"}],"totalResults":"3086","Response":"True"}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: "",
      detail: "",
      fav: [],
      results: movies.Search//false
    }

    this.changeText = this.changeText.bind(this)
    this.getMovies = this.getMovies.bind(this)
    this.getDetails = this.getDetails.bind(this)
    this.handleLikes = this.handleLikes.bind(this)
  }

  handleLikes(id) {    
    const remove = (filmID) => {this.state.fav.filter(fav => {
      return fav !== filmID
    })}

    if(this.state.fav.includes(id)){
      let newFav = remove(id)
      return this.setState({fav: newFav})
    }
    this.setState({fav: [id, ...this.state.fav]})
  }

  changeText(event) {
    this.setState({
      search: event.target.value
    })
  }

  async getDetails(id) {
    let detail = await movieDetails(id)
    this.setState({detail})
    console.log(detail)
  }

  async getMovies() {    
    let search = await movieSearch(this.state.search)
    this.setState({results: search.Search})  
  }

  render() {
    return (
      <Router>
        <div className="App">        
          <Route exact path = '/' render={(props) => <Home {...props} res={this.state.results} search={this.state.value} searchHandler={this.changeText} submit={this.getMovies}/>} />
          <Route path = '/details/:id' render={(props) => <Details {...props} fetch={this.getDetails} detail={this.state.detail} like={this.handleLikes}/>} />
        </div>
        
        {/* <div className="App">
          <header className="App-header">
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
        </div> */}
      </Router>
      
    );
  }
}

export default App
