import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Button } from './styles';
import iconHeartWhite from './assets/icon-heart-white.svg';
import iconHeartGrey from './assets/icon-heart-grey.svg';
import iconHeartFull from './assets/icon-heart-full.svg';

export default function LikeButton({ imdbID, showText, alwaysVisible }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  // Redux state: get the favourites list.
  const likes = useSelector(state => state.likesReducer);

  // Based on the favourites list, set the liked state.
  useEffect(() => {
    setLiked(likes.indexOf(imdbID) >= 0);
  }, []);

  /**
   * Handles the click event on the like button.
   * @param {*} e
   */
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    setLiked(!liked);

    // Update the favourites list in redux state.
    dispatch({
      type: 'SET_LIKE',
      imdbID,
    });
  }

  return (
    <Container>
      <Button
        type="button"
        className={`heart-button ${liked || alwaysVisible ? 'visible' : ''} ${liked ? 'liked' : ''} ${showText && liked ? 'liked-red' : ''}`}
        onClick={e => handleClick(e)}>
        <img
          src={
            (liked && iconHeartFull) ||
            (showText ? iconHeartGrey : iconHeartWhite)
          }
          alt="Like it"
        />
        {showText && !liked && 'Add to favourites'}
        {showText && liked && 'Added'}
      </Button>
    </Container>
  );
}

LikeButton.propTypes = {
  imdbID: PropTypes.string.isRequired,
  showText: PropTypes.bool,
  alwaysVisible: PropTypes.bool,
};

LikeButton.defaultProps = {
  showText: false,
  alwaysVisible: false,
};
