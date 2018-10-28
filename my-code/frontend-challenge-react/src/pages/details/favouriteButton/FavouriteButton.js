import React from 'react';
import PropTypes from 'prop-types';
import styles from './FavouriteButton.module.scss';
import likeWhite from '../../../img/likeWhite.svg';
import likeGrey from '../../../img/likeGrey.svg';
import likeFilled from '../../../img/likeFilled.svg';

class FavouriteButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likeSrc: likeGrey,
      isFavourite: localStorage.getItem(props.movie.imdbID),
    };
    this.addFavourite = this.addFavourite.bind(this);
  }

  addFavourite = (movie) => {
    const { isFavourite } = this.state;
    if (isFavourite === 'false' || isFavourite === null) {
      this.setState({ isFavourite: 'true' });
      localStorage.setItem(movie.imdbID, 'true');
    } else {
      this.setState({ isFavourite: 'false' });
      localStorage.setItem(movie.imdbID, 'false');
    }
  }

  handleRender = () => {
    const { likeSrc, isFavourite } = this.state;
    const { title, movie } = this.props;

    if (isFavourite === 'false' || isFavourite === null) {
      return (
        <button
          className={styles.favouriteButton}
          type="submit"
          onMouseOver={() => { this.setState({ likeSrc: likeWhite }); }}
          onMouseOut={() => { this.setState({ likeSrc: likeGrey }); }}
          onFocus={() => 0}
          onBlur={() => 0}
          onClick={() => this.addFavourite(movie)}
          onKeyPress={() => this.addFavourite(movie)}
        >
          <img src={likeSrc} alt="Favourite" className={styles.favouriteIcon} />
          {title}
        </button>
      );
    }
    return (
      <button
        className={[styles.favouriteButton, styles.added].join(' ')}
        type="submit"
        onMouseOver={() => { this.setState({ likeSrc: likeWhite }); }}
        onMouseOut={() => { this.setState({ likeSrc: likeGrey }); }}
        onFocus={() => 0}
        onBlur={() => 0}
        onClick={() => this.addFavourite(movie)}
        onKeyPress={() => this.addFavourite(movie)}
      >
        <img src={likeFilled} alt="Favourite" className={styles.favouriteIcon} />
        Added
      </button>
    );
  }

  render() {
    return this.handleRender();
  }
}

FavouriteButton.propTypes = {
  title: PropTypes.string,
  movie: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

FavouriteButton.defaultProps = {
  title: null,
  movie: null,
};

export default FavouriteButton;
