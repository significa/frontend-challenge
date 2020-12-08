import { GetServerSideProps } from 'next'
import { Search } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import MovieCard, { MovieCardProps } from 'components/MovieCard'
import TextField from 'components/TextField'
import { Grid } from 'components/Grid'

import api from 'services/api'

import moviesMock from 'components/MovieCard/mock'

export type HomePageProps = {
  movies: MovieCardProps[]
}

const HomePage = ({ movies }: HomePageProps) => {
  return (
    <Base>
      <TextField
        name="search"
        placeholder="Search movies..."
        initialValue=""
        icon={<Search />}
      />

      <Grid>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </Grid>
    </Base>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  /*  const { data } = await api.get(
    'http://www.omdbapi.com/?s=rambo&type=movie&apikey=3f8e8747'
   )*/

  return {
    props: {
      movies: moviesMock
      /*  movies: data.Search */
    }
  }
}
