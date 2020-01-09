import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getLikes } from '../../store/modules/likes/reducer';
import { Container, Button } from './styles';
import iconHeartWhite from './assets/icon-heart-white.svg';
import iconHeartGrey from './assets/icon-heart-grey.svg';
import iconHeartFull from './assets/icon-heart-full.svg';

export default function LikeButton({
  imdbID,
  showText = false,
  alwaysVisible = false,
}) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  // Redux state: get the favourites list.
  const likes = useSelector(getLikes);

  // Based on the favourites list, set the liked state.
  useEffect(() => {
    setLiked(likes.indexOf(imdbID) >= 0);
  }, [imdbID, likes]);

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
        className="heart-button"
        alwaysVisible={alwaysVisible}
        liked={liked}
        showText={showText}
        onClick={handleClick}>
        <img
          src={
            (liked && iconHeartFull) ||
            (showText ? iconHeartGrey : iconHeartWhite)
          }
          alt="Like it"
        />
        {showText && (liked ? 'Added' : 'Add to favourites')}
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
