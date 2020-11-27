import React from 'react';
import getMovie from '../../services/getMovie';
import Movie from '../../components/pages/Movie';

const MoviePage = props => <Movie {...props} />;

export async function getServerSideProps({ query }) {
  const { id } = query;
  const response = await getMovie(id);

  return {
    props: { response }
  };
}

export default MoviePage;
