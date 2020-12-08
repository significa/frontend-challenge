import { GetServerSideProps } from 'next'

import Movie, { MovieProps } from 'templates/Movie'

import movieMock from 'templates/Movie/mock'

export type MoviePageProps = {
  movie: MovieProps
}

export default function Index({ movie }: MoviePageProps) {
  return <Movie {...movie} />
}

export const getServerSideProps: GetServerSideProps<MoviePageProps> = async () => {
  /*  const { data } = await api.get(
    'http://www.omdbapi.com/?s=rambo&type=movie&apikey=3f8e8747'
   )*/

  return {
    props: {
      movie: movieMock
      /*  movies: data.Search */
    }
  }
}
