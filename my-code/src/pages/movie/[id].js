import React from 'react';
import getMovie from '../../services/getMovie';
import Movie from '../../components/pages/Movie';

const MoviePage = props => <Movie {...props} />;

export async function getServerSideProps({ query }) {
  const { id } = query;
  const { data } = await getMovie(id);

  return {
    props: { movie: data }
  };
}

export default MoviePage;
