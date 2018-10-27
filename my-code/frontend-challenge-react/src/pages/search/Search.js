import React from 'react';
import styles from './Search.module.scss';
import Header from '../../components/header/Header';
import SearchBar from '../../components/searchBar/SearchBar';
import searchIllustration from '../../img/searchIllustration.png';
import like from '../../img/like.svg';
import likeFilled from '../../img/likeFilled.svg';

const Error = {
  TOO_MANY_RESULTS: 'Too many results.',
  MOVIE_NOT_FOUND: 'Movie not found!',
};

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      error: null,
      movies: [],
      isLoading: false,
    };
    this.queryHandler = this.queryHandler.bind(this);
  }

  fetchMovie = async (id) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=4391171d`);
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

  handleRender = () => {
    const {
      query, error, movies, isLoading,
    } = this.state;

    if (query.length === 0) {
      return (
        this.renderEmptyState()
      );
    }

    if (error === Error.TOO_MANY_RESULTS) {
      return (
        <div style={{ color: 'white' }}>too many results</div>
      );
    }

    if (error === Error.MOVIE_NOT_FOUND) {
      return (
        <div style={{ color: 'white' }}>movie not found</div>
      );
    }

    if (isLoading) {
      return (
        <div style={{ color: 'white' }}>Loading...</div>
      );
    }

    return (
      <div>
        <div className={styles.movieList}>
          {this.renderMovies(movies)}
        </div>
      </div>
    );
  }

  renderMovies = movies => (
    movies.map(movie => (
      <div className={styles.movieContainer} key={movie.imdbID}>
        <div style={{ backgroundImage: `url(${movie.Poster === 'N/A' ? 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png' : movie.Poster})` }} className={styles.movieImage}>
          <div className={styles.movieImageInfo}>
            <span className={styles.movieTitle}>{movie.Title}</span>
            <span className={styles.movieYear}>{movie.Year}</span>
            <img src={like} alt="Like" className={styles.likeButton} onMouseOver={(e) => { e.currentTarget.src = likeFilled; }} onMouseOut={(e) => { e.currentTarget.src = like; }} onFocus={() => 0} onBlur={() => 0} />
          </div>
        </div>
      </div>
    ))

  )

  renderEmptyState = () => (
    <React.Fragment>
      <div className={styles.emptyContainer}>
        <img src={searchIllustration} alt="illustration" className={styles.searchIllustration} />
        <div>
          <h3 className={styles.searchIllustrationDesc}>
            Don&apos;t know what to
            <br />
            search?
          </h3>
        </div>
        <p className={styles.searchIllustrationSecondDesc}>
          Here&apos;s an offer you can&apos;t refuse
        </p>
      </div>
    </React.Fragment>
  )

  render() {
    return (
      <div className={styles.container}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="box">
              <Header />
              <SearchBar action={this.queryHandler} />

              {this.handleRender()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
