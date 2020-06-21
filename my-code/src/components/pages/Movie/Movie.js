// @flow
import React from 'react';
import classNames from 'classnames';
import type { MoviePageProps } from '../../../pages/movie/[id]';
import Router from 'next/router';
import arrowIconGrey from '../../../icons/icon-arrow-grey.svg';
import arrowIconWhite from '../../../icons/icon-arrow-white.svg';
import imdblogo from '../../../icons/logo-imdb.svg';
import rottenTomatoesLogo from '../../../icons/logo-rotten-tomatoes.svg';
import heartGreyIcon from '../../../icons/icon-heart-grey.svg';
import heartFullIcon from '../../../icons/icon-heart-full.svg';
import Layout from '../../shared/Layout';
import useLike from '../../hooks/useLike';
import styles from './Movie.css';

type Props = MoviePageProps;

export default function Movie(props: Props) {
  const { movie, error } = props;

  if (error) {
    return (
      <Layout>
        <div className={styles.ErrorPage}>
          <img className={styles.ErrorImg} src={rottenTomatoesLogo} />
          <span>Something went wrong :/</span>
        </div>
      </Layout>
    );
  }

  if (Object.keys(movie).length === 0 && movie?.constructor === Object) {
    return (
      <Layout>
        <div className={styles.ErrorPage}>
          <img className={styles.ErrorImg} src={rottenTomatoesLogo} />
          <span>Movie not found :/</span>
        </div>
      </Layout>
    );
  }

  const { title, runtime, year, id, rated, poster, ratings, plot, actors, genre, director } = movie;
  const actorsList = actors.split(', ');
  const genreList = genre.split(', ');
  const directorList = director.split(', ');

  const { liked, toggle } = useLike(id);

  const handleLike = () => {
    toggle();
  };

  const handleBackHistory = () => Router.back();

  return (
    <Layout>
      <div>
        <button title="Back" className={styles.BackButton} onClick={handleBackHistory}>
          <img
            onMouseOver={(e) => (e.currentTarget.src = arrowIconWhite)}
            onMouseLeave={(e) => (e.currentTarget.src = arrowIconGrey)}
            src={arrowIconGrey}
            alt="Back icon"
            className={styles.ArrowIcon}
          />
        </button>
      </div>
      <div className={styles.Movie}>
        <div className={styles.MovieContent}>
          <div className={styles.MovieInfo}>
            <span>
              {runtime} &#183; {year} &#183;
            </span>
            <span className={styles.Rated}>{rated}</span>
          </div>
          <h1 className={styles.Title}>{title}</h1>
          <section className={styles.Badges}>
            {ratings.length > 0 &&
              ratings.map((rating) => {
                if (rating?.Source === 'Internet Movie Database') {
                  return (
                    <div key={rating.Source} className={styles.Badge}>
                      <div className={styles.Imdblogo}>
                        <img alt="IMDB logo" src={imdblogo} />
                      </div>
                      <span className={styles.Ratting}>{rating?.Value}</span>
                    </div>
                  );
                }

                if (rating?.Source === 'Rotten Tomatoes') {
                  return (
                    <div key={rating?.Source} className={styles.Badge}>
                      <div className={styles.Rottenlogo}>
                        <img atl="Rotten Tomatoes logo" src={rottenTomatoesLogo} />
                      </div>
                      <span className={styles.Ratting}>{rating?.Value}</span>
                    </div>
                  );
                }
              })}
            <button
              title={liked ? 'Added' : 'Add to favourites'}
              onClick={handleLike}
              className={classNames(styles.LikeButton, { [styles.liked]: liked })}
            >
              <img alt="heart icon" className={styles.HeartIcon} src={liked ? heartFullIcon : heartGreyIcon} />
              {liked ? 'Added' : 'Add to favourites'}
            </button>
          </section>
          <section className={styles.MovieDetails}>
            <div>
              <h2 className={styles.PlotHeading}>Plot</h2>
              <p className={styles.PlotText}>{plot}</p>
            </div>
            <div className={styles.Lists}>
              <div>
                <ul className={styles.DetailsList}>
                  <h2 className={styles.DetailsHeading}>Cast</h2>
                  {actorsList.map((cast) => (
                    <li key={cast}>{cast.trim()}</li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className={styles.DetailsList}>
                  <h2 className={styles.DetailsHeading}>Genre</h2>
                  {genreList.map((cast) => (
                    <li key={cast}>{cast.trim()}</li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className={styles.DetailsList}>
                  <h2 className={styles.DetailsHeading}>Director</h2>
                  {directorList.map((cast) => (
                    <li key={cast}>{cast.trim()}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/** Hack to deal with onError for ssr page */}
        <div
          className={styles.Poster}
          dangerouslySetInnerHTML={{
            __html: `
          <img alt="${title} Poster" src="${poster}"
          class="${styles.PosterImg}"
          onerror="this.parentElement.remove()"
          />
            `
          }}
        />
      </div>
    </Layout>
  );
}
