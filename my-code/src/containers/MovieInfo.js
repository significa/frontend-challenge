import React, { Component } from 'react'
import logo from '../assets/images/logo.svg';
import arrowGrey from '../assets/icons/icon-arrow-grey.svg';
import { withRouter } from 'react-router-dom';
import DetailColumn from '../components/detailColumn';
import imdbLogo from '../assets/images/logo-imdb.svg';
import rottenLogo from '../assets/images/logo-rotten-tomatoes.svg';
import AddMovieButton from '../components/addMovieButton';


class MovieInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
      loading: false,
      addedMovies: [],
    }
  }

  componentDidMount() {
    this.fetchMovieInfo();
    if(localStorage.getItem('addedMovies')) {
      const retrievedData = localStorage.getItem('addedMovies');
      const parseData = JSON.parse(retrievedData);
      this.setState({ addedMovies: parseData})
    }
  }

  fetchMovieInfo() {
    fetch(`http://www.omdbapi.com/?apikey=a6487992&i=${this.props.location.state.imdbID}` , {
      method: 'get',
      headers: {
        'Accept': 'application/json',
      },
    })
    .then((response) => { return response.json(); })
    .then((response) => {
        this.setState({ data: response, loading: false })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleAddButton = (id) => {
    console.log(this.state)
    if(this.state.addedMovies.includes(id)) {
      const newArr = this.state.addedMovies.filter((item) => { return item !== id })
      this.setState(() => { return { addedMovies: newArr } }, () => {
          localStorage.setItem('addedMovies', JSON.stringify(this.state.addedMovies));
      });

    } else {
      const newArr = this.state.addedMovies.concat(id)
      this.setState(() => { return { addedMovies: newArr } }, () => {
          localStorage.setItem('addedMovies', JSON.stringify(this.state.addedMovies));
      });
    }
  }

  render() {
    return (
      <div>
        <img src={logo} className='logo' alt="logo" />
        <a onClick={() => { this.props.history.goBack(); }} className='arrow-back'>
          <img src={arrowGrey} alt="icon back"/>
        </a>
        {Object.keys(this.state.data).length > 0 ? 
          <div className='movie-info-container'>
            <div className="info-wrapper">
              <div className='info-time-container'>
                <span className='font-regular text-color-secundary'>
                  {this.state.data.Runtime}
                </span>
                <span className='font-regular text-color-secundary info-time-spacer'>·</span>
                <span className='font-regular text-color-secundary'>
                  {this.state.data.Year}
                </span>
                <span className='font-regular text-color-secundary info-time-spacer'>·</span>
                <div className='info-time-rated'>
                  <span className='font-regular text-color-dark'>
                    {this.state.data.Rated}
                  </span>
                </div>
              </div>
              <div>
                <h1 className='font-bold text-color-default'>
                  {this.state.data.Title}
                  </h1>
              </div>
              <div className='info-rate-container'>
                <a className='info-rate-button-logo'>
                  <div className='info-rate-logo-wrapper logo-imdb'>
                    <img src={imdbLogo} alt="imdb logo"/>
                  </div>
                  <div className='info-rate-text-wrapper'>
                    <span className='font-regular text-color-default info-rate-text'>
                      {this.state.data.Ratings[0].Value}
                    </span>
                  </div>
                </a>
                <a className='info-rate-button-logo'>
                  <div className='info-rate-logo-wrapper logo-rotten-tomatoes'>
                    <img src={rottenLogo} alt="rotten tomatoes logo"/>
                  </div>
                  <div className='info-rate-text-wrapper'>
                    <span className='font-regular text-color-default info-rate-text'>
                      {this.state.data.Ratings[1].Value}
                    </span>
                  </div>
                </a>
                <AddMovieButton addedMovies={this.state.addedMovies}
                  imdbID={this.props.location.state.imdbID}
                  handleAddButton={this.handleAddButton}
                />
              </div>
              <div>
                <h1 className='font-regular text-color-secundary' style={{ marginBottom: 8}}>
                  Plot
                </h1>
                <p className='font-regular text-color-default'>
                  {this.state.data.Plot}
                </p>
              </div>
              <div className='info-detail-column-wrapper'>
                <DetailColumn title="Cast">
                  {this.state.data.Actors.split(",")}
                </DetailColumn>
                <DetailColumn title="Genre">
                  {this.state.data.Genre.split(",")}
                </DetailColumn>
                <DetailColumn title="Director">
                  {this.state.data.Director.split(",")}
                </DetailColumn>
              </div>
            </div>
            <div className='poster-wrapper'>
              <img src={this.state.data.Poster} className='poster' alt='movie poster' />
            </div>
          </div>
          :
          <div>
            Aaaaaaaaa
          </div>
        }
      </div>
    )
  }

} 

export default withRouter(MovieInfo);

