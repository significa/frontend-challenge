import { Search } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import MovieCard, { MovieCardProps } from 'components/MovieCard'
import TextField from 'components/TextField'
import { Grid } from 'components/Grid'

import moviesMock from 'components/MovieCard/mock'

export type HomePageProps = {
  movies: MovieCardProps[]
}

const HomePage = ({ movies }: HomePageProps) => (
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

export default HomePage

export function getStaticProps() {
  return {
    props: {
      movies: moviesMock
    }
  }
}
