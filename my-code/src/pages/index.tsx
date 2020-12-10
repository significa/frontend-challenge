import { GetServerSideProps } from 'next'
import { Search } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import MovieCard from 'components/MovieCard'
import TextField from 'components/TextField'
import { Grid } from 'components/Grid'
import Empty from 'components/Empty'
import NotFound from 'components/NotFound'

import { useSearch } from 'hooks/searchHook'

export type HomePageProps = {
  initialSearch: string
}

const HomePage = ({ initialSearch }: HomePageProps) => {
  const { movies, error, query, setQuery } = useSearch(initialSearch)

  return (
    <Base>
      <TextField
        name="search"
        placeholder="Search movies..."
        initialValue=""
        icon={<Search />}
        value={query}
        onInput={(value: string) => {
          setQuery(value)
        }}
      />

      {!movies && <Empty />}

      {query.length > 3 && movies?.Error && <NotFound />}

      {error && <NotFound />}

      {movies && (
        <Grid>
          {movies?.Search?.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} />
          ))}
        </Grid>
      )}
    </Base>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  const initialSearch = (context.query.query as string) || ''

  return {
    props: { initialSearch }
  }
}
