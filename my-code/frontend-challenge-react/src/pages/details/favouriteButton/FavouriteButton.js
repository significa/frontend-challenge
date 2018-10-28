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
      isFavourite: false,
    };
    // this.queryHandler = this.queryHandler.bind(this);
  }

  addFavourite = (movie) => {
    this.setState(prevState => ({
      isFavourite: !prevState.isFavourite,
    }));
    // localStorage.setItem(movie.imdbID, true);
    // console.log(localStorage.getItem(movie.imdbID));
  }

  handleRender = () => {
    const { likeSrc, isFavourite } = this.state;
    const { title, movie } = this.props;

    if (isFavourite) {
      return (
        <button
          className={[styles.favouriteButton, styles.added].join(' ')}
          type="submit"
          onMouseOver={() => { this.setState({ likeSrc: likeWhite }); }}
          onMouseOut={() => { this.setState({ likeSrc: likeGrey }); }}
          onFocus={() => 0}
          onBlur={() => 0}
          onClick={this.addFavourite(movie)}
          onKeyPress={this.addFavourite(movie)}
        >
          <img src={likeFilled} alt="Favourite" className={styles.favouriteIcon} />
          Added
        </button>
      );
    }
    return (
      <button
        className={styles.favouriteButton}
        type="submit"
        onMouseOver={() => { this.setState({ likeSrc: likeWhite }); }}
        onMouseOut={() => { this.setState({ likeSrc: likeGrey }); }}
        onFocus={() => 0}
        onBlur={() => 0}
        onClick={this.addFavourite}
        onKeyPress={this.addFavourite}
      >
        <img src={likeSrc} alt="Favourite" className={styles.favouriteIcon} />
        {title}
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
