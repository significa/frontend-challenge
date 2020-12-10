import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { Search } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import MovieCard, { MovieCardProps } from 'components/MovieCard'
import TextField from 'components/TextField'
import { Grid } from 'components/Grid'

import moviesMock from 'components/MovieCard/mock'
import api from 'services/api'

export type HomePageProps = {
  movies: MovieCardProps[]
}

const HomePage = ({ movies }: HomePageProps) => {
  const [query, setQuery] = useState('')

  return (
    <Base>
      <TextField
        name="search"
        placeholder="Search movies..."
        initialValue=""
        icon={<Search />}
        value={query}
        onInput={(value: any) => {
          setQuery(value)
        }}
      />
      {!!movies && <div>oi</div>}

      <Grid>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
        ))}
      </Grid>
    </Base>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  query
) => {
  const { data } = await api.get(`?s=${query}&type=movie&apikey=3f8e8747`)

  return {
    props: {
      /*  movies: moviesMock */
      movies: data.Search
    }
  }
}
