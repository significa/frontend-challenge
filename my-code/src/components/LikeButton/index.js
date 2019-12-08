import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

import iconHeartWhite from './assets/icon-heart-white.svg';
import iconHeartFull from './assets/icon-heart-full.svg';

function LikeButton({ likes, imdbID, dispatch }) {
  const [like, setLike] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'GET_LIKES',
    });

    setLike(likes.indexOf(imdbID) >= 0);
  }, [dispatch, imdbID, likes]);

  function handleHeartClick(e) {
    e.preventDefault();
    e.stopPropagation();

    setLike(!like);

    dispatch({
      type: 'ADD_LIKE',
      imdbID,
    });
  }

  const imgsrc = like ? iconHeartFull : iconHeartWhite;

  return (
    <Container>
      <button
        type="button"
        className="heart-button"
        onClick={e => handleHeartClick(e)}>
        <img src={imgsrc} alt="Like it" />
      </button>
    </Container>
  );
}

export default connect(state => ({
  likes: state.likesReducer,
}))(LikeButton);
