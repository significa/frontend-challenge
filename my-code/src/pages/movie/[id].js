import React from 'react';
import Movie from '../../components/pages/Movie';
import getMovie from '../../services/getMovie';

export default function index(props) {
  return <Movie {...props} />;
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const { ok, movie } = await getMovie(id);
  let props = {};

  if (ok) {
    props = {
      movie,
      ok
    };

    return { props };
  }

  return {
    props: { ok: false, error: true }
  };
}
