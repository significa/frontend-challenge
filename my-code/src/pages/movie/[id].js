// @flow
import React from 'react';
import MoviePage from '../../components/pages/Movie';
import getMovie from '../../services/getMovie';
import Head from 'next/head';

export type MoviePageProps = {
  movie: {
    title: string,
    runtime: string,
    year: string,
    rated: string,
    poster: string,
    ratings: Array<?{
      Value: string,
      Source: 'Internet Movie Database' | 'Rotten Tomatoes'
    }>,
    plot: string,
    actors: string,
    genre: string,
    director: string,
    id: string
  },
  error: boolean
};

type Props = {
  movie: $PropertyType<MoviePageProps, 'movie'>,
  error: $PropertyType<MoviePageProps, 'error'>,
  baseUrl: string
};

export default function Movie(props: Props) {
  const { baseUrl, movie, error } = props;
  return (
    <>
      <Head>
        <title>{movie?.title || 'Error'} | What&apos;s in</title>
        <meta name="description" content={movie?.plot || 'Error Page'} />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={`${baseUrl}/`} />
        <meta property="og:title" content={`${movie?.title || 'Error'} | What's in`} />
        <meta property="og:description" content={movie?.plot || 'Error Page'} />
        <meta property="og:url" content={`${baseUrl}/movie/${movie?.id}`} />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
      </Head>
      <MoviePage movie={movie} error={error} />
    </>
  );
}

export async function getServerSideProps({ params }: { params: { id: string } }) {
  const { id } = params;
  const { ok, movie } = await getMovie(id);
  const { SITE_API_BASE_URL } = process?.env;
  let props = { baseUrl: SITE_API_BASE_URL };

  if (ok) {
    props = {
      ...props,
      movie,
      ok
    };

    return { props };
  }

  return {
    props: { ...props, ok: false, error: true }
  };
}
