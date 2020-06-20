// @flow

import React, { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import heartIconFull from '../../../icons/icon-heart-full.svg';
import heartIconWhite from '../../../icons/icon-heart-white.svg';
import styles from './MovieCard.css';
import { useMoviesState } from '../../context/MoviesContext';
import imgFallback from '../../../icons/logo-rotten-tomatoes.svg';

type Props = {
  liked: boolean,
  title: string,
  id: string,
  poster: string,
  year: string,
  className?: string
};

export default function MovieCard(props: Props) {
  const { title, year, poster, id, className } = props;
  const [image, setImage] = useState(poster);
  const { state, dispatch } = useMoviesState();
  const isLiked = state.includes(id);

  const handleLike = () => {
    const isLiked = state.includes(id);
    const actionType = isLiked ? 'UNLIKE' : 'LIKE';

    dispatch({
      type: actionType,
      payload: {
        id
      }
    });
  };

  const handleImageError = () => {
    setImage(imgFallback);
  };

  return (
    <div className={classNames(styles.Wrapper, className)}>
      <img onError={handleImageError} alt={`${title} Poster`} className={styles.Poster} src={image} />
      <div className={styles.Info}>
        <Link shallow href="/movie/[id]" as={`/movie/${id}`}>
          <a className={styles.Content}>
            <h2 className={styles.Title}>{title}</h2>
            <span>{year}</span>
          </a>
        </Link>
        <button className={styles.LikeButton}>
          <img
            onClick={handleLike}
            alt={isLiked ? 'Liked icon' : 'Like icon'}
            src={isLiked ? heartIconFull : heartIconWhite}
          />
        </button>
      </div>
    </div>
  );
}
