import React from 'react';
import styles from './Search.module.scss';

import searchIllustration from '../../img/searchIllustration.png';
import leftArrow from '../../img/leftArrow.svg';

import Header from '../../components/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import MovieDetails from '../details/MovieDetails';
import MovieCard from './movieCard/MovieCard';

const Error = {
  TOO_MANY_RESULTS: 'Too many results.',
  MOVIE_NOT_FOUND: 'Movie not found!',
};

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexSelected: null,
      query: '',
      error: null,
      movies: [],
      isLoading: false,
    };
    this.queryHandler = this.queryHandler.bind(this);
  }

  fetchMovie = async (id) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=4391171d&plot=full`);
    const json = await response.json();
    this.setState(prevState => ({
      movies: [...prevState.movies, json],
      isLoading: false,
    }));
  }

  queryHandler = async (query) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=4391171d`);
    const movies = await response.json();

    if (movies.Error === Error.TOO_MANY_RESULTS) {
      this.setState({
        query,
        error: Error.TOO_MANY_RESULTS,
        movies: [],
      });
      return;
    }

    if (movies.Error === Error.MOVIE_NOT_FOUND) {
      this.setState({
        query,
        error: Error.MOVIE_NOT_FOUND,
        movies: [],
      });
      return;
    }

    if (typeof movies.Search !== 'undefined') {
      this.setState({
        query,
        error: null,
        movies: [],
        isLoading: true,
      });
      movies.Search.forEach((movie) => {
        this.fetchMovie(movie.imdbID);
      });
    }

    this.setState({
      query,
    });
  }

  renderSearchPage = () => {
    const {
      query, error, movies, isLoading,
    } = this.state;

    if (query.length === 0) {
      return (
        this.renderEmptyState()
      );
    }

    switch (error) {
      case Error.TOO_MANY_RESULTS: return (
        this.renderEmptyState('Too many results!', 'Please be more specific')
      );
      case Error.MOVIE_NOT_FOUND: return (
        this.renderEmptyState('Movie not found!', 'Please enter another title')
      );
      default: break;
    }

    if (isLoading) {
      return (
        <div style={{ color: 'white' }}>Loading...</div>
      );
    }

    return (
      <div>
        <div className={styles.movieList}>
          <div className="row" style={{ width: '100%' }}>
            {this.renderMovies(movies)}
          </div>
        </div>
      </div>
    );
  }

  addFavourite = (movie) => {
    if (localStorage.getItem(movie.imdbID) === 'false' || localStorage.getItem(movie.imdbID) == null) {
      localStorage.setItem(movie.imdbID, 'true');
      this.setState({ indexSelected: null });
    } else {
      localStorage.setItem(movie.imdbID, 'false');
      this.setState({ indexSelected: null });
    }
  }

  handleMovieFavourite = (e, movie, index) => {
    if (e.target.tagName === 'IMG') {
      this.addFavourite(movie);
    } else {
      this.setState({ indexSelected: index });
    }
  }

  renderMovies = movies => (
    movies.map((movie, index) => (
      <MovieCard movie={movie} index={index} handleMovieFavourite={this.handleMovieFavourite} />
    ))
  )

  renderMovieDetails = movie => (
    <React.Fragment>
      <div className={styles.movieDetailsContainer}>
        <img
          src={leftArrow}
          alt="Go back"
          onClick={() => { this.setState({ indexSelected: null }); }}
          onKeyPress={() => { this.setState({ indexSelected: null }); }}
          role="presentation"
          style={{ cursor: 'pointer' }}
        />
        <MovieDetails movie={movie} />
      </div>
    </React.Fragment>
  )

  renderEmptyState = (error, errorDesc) => (
    <React.Fragment>
      <div className={styles.emptyContainer}>
        <img src={searchIllustration} alt="illustration" className={styles.searchIllustration} />
        <div>
          <h3 className={styles.searchIllustrationDesc}>
            {error || 'Dont know what to search?'}
          </h3>
        </div>
        <p className={styles.searchIllustrationSecondDesc}>
          {errorDesc || 'Heres an offer you cant refuse'}
        </p>
      </div>
    </React.Fragment>
  )

  handleRender = () => {
    const { indexSelected, movies } = this.state;
    if (indexSelected == null) {
      return (
        <React.Fragment>
          <SearchBar action={this.queryHandler} />
          {this.renderSearchPage()}
        </React.Fragment>
      );
    }
    return (
      this.renderMovieDetails(movies[indexSelected])
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        {this.handleRender()}
      </div>
    );
  }
}

export default Search;
