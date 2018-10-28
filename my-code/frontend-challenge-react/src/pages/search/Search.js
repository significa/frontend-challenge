import React from 'react';
import styles from './Search.module.scss';
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import searchIllustration from '../../img/searchIllustration.png';
import like from '../../img/like.svg';
import likeFilled from '../../img/likeFilled.svg';
import leftArrow from '../../img/leftArrow.svg';

import MovieDetails from '../details/MovieDetails';

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

  renderMovies = movies => (

    movies.map((movie, index) => (
      <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2" key={movie.imdbID}>
        <div
          className={styles.movieContainer}
          key={movie.imdbID}
          onClick={() => {
            this.setState({ indexSelected: index });
          }}
          onKeyPress={() => { this.setState({ indexSelected: index }); }}
          role="presentation"
        >
          <div style={{ backgroundImage: `url(${movie.Poster === 'N/A' ? 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png' : movie.Poster})` }} className={styles.movieImage}>
            <div className={styles.movieImageInfo}>
              <span className={styles.movieTitle}>{movie.Title}</span>
              <span className={styles.movieYear}>{movie.Year}</span>
              <img src={like} alt="Like" className={styles.likeButton} onMouseOver={(e) => { e.currentTarget.src = likeFilled; }} onMouseOut={(e) => { e.currentTarget.src = like; }} onFocus={() => 0} onBlur={() => 0} />
            </div>
          </div>
        </div>

      </div>
    ))
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

  goBack = () => {
    this.setState({
      indexSelected: null,
    });
  }

  renderMovieDetails = movie => (
    <React.Fragment>
      <div className={styles.movieDetailsContainer}>
        <img
          src={leftArrow}
          alt="Go back"
          onClick={this.goBack}
          onKeyPress={this.goBack}
          role="presentation"
          style={{ cursor: 'pointer' }}
        />
        <MovieDetails movie={movie} />
      </div>
    </React.Fragment>
  )

  handleRender = () => {
    const { indexSelected } = this.state;
    if (indexSelected == null) {
      return (
        <React.Fragment>
          <SearchBar action={this.queryHandler} />
          {this.renderSearchPage()}
        </React.Fragment>
      );
    }

    const { movies } = this.state;
    const movie = movies[indexSelected];
    return (
      this.renderMovieDetails(movie)
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Header />
            {this.handleRender()}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
