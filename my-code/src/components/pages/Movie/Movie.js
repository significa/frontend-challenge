import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import Layout from '../../shared/Layout';
import NotFound from '../../pages/Search/NotFound';
import imdbIcon from '../../../assets/icons/icon-imdb.svg';
import rottenTomatoesIcon from '../../../assets/icons/icon-rotten-tomatoes.svg';
import arrowIconGrey from '../../../assets/icons/icon-arrow-grey.svg';
import arrowIconWhite from '../../../assets/icons/icon-arrow-white.svg';
import heart from '../../../assets/icons/icon-heart-grey.svg';
import styles from './Movie.css';

const Movie = props => {
  const { movie } = props;

  if (movie.Response === 'False' || !movie) {
    return (
      <Layout>
        <NotFound />
      </Layout>
    );
  }

  const {
    Title,
    Year,
    Actors,
    Rated,
    Runtime,
    Genre,
    Director,
    Plot,
    Ratings,
    Poster
  } = movie;

  const actorList = Actors?.split(', ');
  const genreList = Genre?.split(', ');

  const handlerBackNavigation = () => Router.back();

  const renderPoster = () => {
    const onerror = `this.parentElement.remove()`;
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<img onError="${onerror}" src="${Poster}" />`
        }}
      ></div>
    );
  };

  return (
    <Layout>
      <div className={styles.NavigationContent}>
        <button
          title="Back to the search"
          className={styles.BackButton}
          onClick={handlerBackNavigation}
        >
          <img
            alt="Arrow Back Icon"
            src={arrowIconGrey}
            onMouseLeave={e => (e.currentTarget.src = arrowIconGrey)}
            onMouseOver={e => (e.currentTarget.src = arrowIconWhite)}
          />
        </button>
      </div>
      <div className={styles.Wrapper}>
        <div className={styles.MovieContent}>
          <div className={styles.Details}>
            <span>{`${Runtime} · ${Year} · `}</span>
            <span className={styles.RatedTag}>{Rated}</span>
          </div>
          <h1 className={styles.Title}>{Title}</h1>
          <div className={styles.RatedContent}>
            {Ratings.length > 0 &&
              Ratings.map(rating => {
                if (rating?.Source === 'Internet Movie Database') {
                  return (
                    <div key={rating?.Source} className={styles.ImdbTag}>
                      <div className={styles.ImdbTagIcon}>
                        <img src={imdbIcon} />
                      </div>
                      <span className={styles.Score}>{rating?.Value}</span>
                    </div>
                  );
                }

                if (rating?.Source === 'Rotten Tomatoes') {
                  return (
                    <div key={rating?.Source} className={styles.RottenTag}>
                      <div className={styles.RottenTagIcon}>
                        <img src={rottenTomatoesIcon} />
                      </div>
                      <span className={styles.Score}>{rating?.Value}</span>
                    </div>
                  );
                }
              })}
            <div className={styles.LikeTag}>
              <button className={styles.LikeButton}>
                <img src={heart} width="16" />
                Add to favourites
              </button>
            </div>
          </div>
          <div>
            <div className={styles.Storyline}>
              <span className={styles.SmallTitle}>Plot</span>
              <p className={styles.StorylineText}>{Plot}</p>
            </div>
            <div className={styles.MoreAbout}>
              <div className={styles.ListContent}>
                <span className={styles.SmallTitle}>Cast</span>
                <ul className={styles.List}>
                  {actorList.map(actor => {
                    return <li key={actor}>{actor.trim()}</li>;
                  })}
                </ul>
              </div>
              <div className={styles.ListContent}>
                <span className={styles.SmallTitle}>Gender</span>
                <ul className={styles.List}>
                  {genreList.map(genre => {
                    return <li key={genre}>{genre.trim()}</li>;
                  })}
                </ul>
              </div>
              <div>
                <span className={styles.SmallTitle}>Director</span>
                <ul className={styles.List}>
                  <li>{Director}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.PosterContent}>{renderPoster()}</div>
      </div>
    </Layout>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Year: PropTypes.string,
    Actors: PropTypes.string,
    Rated: PropTypes.string,
    Runtime: PropTypes.string,
    Genre: PropTypes.string,
    Director: PropTypes.string,
    Plot: PropTypes.string,
    Ratings: PropTypes.arrayOf(
      PropTypes.shape({
        Source: PropTypes.string,
        Value: PropTypes.string
      })
    ),
    Poster: PropTypes.string,
    Response: PropTypes.string
  })
};

export default Movie;
