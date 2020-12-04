import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import PropTypes from 'prop-types';
import getMovie from '../../services/getMovie';
import Movie from '../../components/pages/Movie';

const MoviePage = props => {
  const { publicRuntimeConfig } = getConfig();
  const { siteApiUrl } = publicRuntimeConfig;
  const { movie } = props;
  return (
    <>
      <Head>
        <title>{movie?.Title || "What's in"}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={movie?.Plot || ''} />
        <link rel="canonical" href={`${siteApiUrl}/`} />
      </Head>
      <Movie {...props} />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  const { data } = await getMovie(id);

  return {
    props: { movie: data }
  };
}

MoviePage.propTypes = {
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
    imdbID: PropTypes.string,
    Response: PropTypes.string
  })
};

export default MoviePage;
