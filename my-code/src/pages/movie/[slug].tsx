import { GetServerSideProps } from 'next'

import api from 'services/api'

import Movie, { MovieProps } from 'templates/Movie'

export type MoviePageProps = {
  movie: MovieProps
}

export default function Index({ movie }: MoviePageProps) {
  return <Movie {...movie} />
}

export const getServerSideProps: GetServerSideProps<MoviePageProps> = async (
  context
) => {
  const { data } = await api.get(
    `/?i=${context.params!.slug}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
  )

  return {
    props: {
      movie: data
    }
  }
}
