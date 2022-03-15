import React from 'react';

export default function DataView({ data, selectOne, addToFavourite }) {
  const dataDisplayer = () => {
    return data.map((movie) => {
      return (
        <div key={movie.imdbID} className='movieCard' onClick={() => selectOne(movie)}>
          <div className='movieCard__wrap'>
            <img src={movie.Poster} alt={movie.imdbID} />

            <svg
              className={
                'icon' + (movie.liked ? ' icon-liked movieCard__wrap-liked' : '')
              }
              onClick={() => addToFavourite(movie)}
            >
              <use href='img/icons/icon-heart-white.svg#Rectangle-12'></use>
            </svg>

            <p className='movieCard__wrap-title'>
              <strong style={{ opacity: 1 }}>{movie.Title}</strong> <br />
              <span>{movie.Year}</span>
            </p>
          </div>
        </div>
      );
    });
  };

  return <div className='grid grid--items'>{dataDisplayer()}</div>;
}
