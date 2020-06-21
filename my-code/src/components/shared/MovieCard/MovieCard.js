// @flow

import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import heartIconFull from '../../../icons/icon-heart-full.svg';
import heartIconWhite from '../../../icons/icon-heart-white.svg';
import styles from './MovieCard.css';
import useLike from '../../hooks/useLike';
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
  const { liked, toggle } = useLike(id);

  const handleLike = () => toggle();

  const handleImageError = (e) => {
    e.target.className = `${e.target.className} ${styles.PosterError}`;
    e.target.src = imgFallback;
  };

  return (
    <div className={classNames(styles.Wrapper, className)}>
      <img onError={handleImageError} alt={`${title} Poster`} className={styles.Poster} src={poster} />
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
            alt={liked ? 'Liked icon' : 'Like icon'}
            src={liked ? heartIconFull : heartIconWhite}
          />
        </button>
      </div>
    </div>
  );
}
