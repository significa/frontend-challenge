import React from 'react';

export default function DataView({ data, selectOne }) {
  const dataDisplayer = () => {
    return data.map((movie) => {
      return (
        <div key={movie.imdbID} className='movieCard' onClick={() => selectOne(movie)}>
          <div className='movieCard__wrap'>
            <img src={movie.Poster} alt={movie.imdbID} />

            <svg
              className={'icon icon-liked' + (data.liked ? ' movieCard__wrap-liked' : '')}
              onClick={() => addToFavourite(movie)}
            >
              <use href='img/icons/icon-heart-white.svg#Rectangle-12'></use>
            </svg>

            <p className='movieCard__wrap-title'>
              <strong>{movie.Title}</strong> <br />
              <span>{movie.Year}</span>
            </p>
          </div>
        </div>
      );
    });
  };

  function addToFavourite() {
    if (data.liked) data.liked = false;
    else data.liked = true;
  }

  return <div className='grid grid--items'>{dataDisplayer()}</div>;
}
