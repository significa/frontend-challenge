import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Button } from './styles';

import iconHeartWhite from './assets/icon-heart-white.svg';
import iconHeartFull from './assets/icon-heart-full.svg';

export default function LikeButton({ imdbID }) {
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

  // Redux state
  const likes = useSelector(state => state.likesReducer);

  function handleHeartClick(e) {
    e.preventDefault();
    e.stopPropagation();

    setLiked(likes.indexOf(imdbID) >= 0);

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
        liked={likes.indexOf(imdbID) >= 0}
        onClick={e => handleHeartClick(e)}>
        <img
          src={likes.indexOf(imdbID) >= 0 ? iconHeartFull : iconHeartWhite}
          alt="Like it"
        />
      </Button>
    </Container>
  );
}
