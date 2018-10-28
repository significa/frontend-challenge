import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Search.module.scss';

import like from '../../../img/like.svg';
import likeFilled from '../../../img/likeFilled.svg';


class MovieCard extends React.Component {
  getLikeIconVisibility = (movie) => {
    if (localStorage.getItem(movie.imdbID) === 'false' || localStorage.getItem(movie.imdbID) == null) {
      return 0;
    }
    return 1;
  };

  getLikeIcon = (movie) => {
    if (localStorage.getItem(movie.imdbID) === 'true') {
      return likeFilled;
    }
    return like;
  };

  render() {
    const { ciao, movie, index } = this.props;
    return (
      <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2" key={movie.imdbID}>
        <div
          className={styles.movieContainer}
          key={movie.imdbID}
          onClick={(e) => { ciao(e, movie, index); }}
          onKeyPress={(e) => { ciao(e, movie, index); }}
          role="presentation"
        >
          <div style={{ backgroundImage: `url(${movie.Poster === 'N/A' ? 'http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png' : movie.Poster})` }} className={styles.movieImage}>
            <img src={likeFilled} alt="Like" className={styles.likeButton} style={{ opacity: this.getLikeIconVisibility(movie) }} />
            <div className={styles.movieImageInfo}>
              <span className={styles.movieTitle}>{movie.Title}</span>
              <span className={styles.movieYear}>{movie.Year}</span>
              <img
                src={this.getLikeIcon(movie)}
                alt="Like"
                className={styles.likeButton}
                onMouseOver={(e) => {
                  if (this.getLikeIconVisibility(movie) === 0) {
                    e.currentTarget.src = likeFilled;
                  }
                }}
                onMouseOut={(e) => {
                  if (this.getLikeIconVisibility(movie) === 0) {
                    e.currentTarget.src = like;
                  } else {
                    e.currentTarget.src = likeFilled;
                  }
                }}
                onFocus={() => 0}
                onBlur={() => 0}
                onClick={(e) => { e.preventDefault(); }}
                role="presentation"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


MovieCard.propTypes = {
  ciao: PropTypes.func,
  movie: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  index: PropTypes.number,
};

MovieCard.defaultProps = {
  ciao: null,
  movie: null,
  index: 0,
};

export default MovieCard;
