// @flow
import React from "react"
import { Grid } from "./Layout"
import { Thumbnail } from "./common/Thumbnail"

type PropsType = {
  data: Array<{ Poster: string, Title: string, Year: string, imdbID: string }>
}

type MovieType = {
  imdbID: string,
  Title: string,
  Year: string,
  Poster: string
}

const Results = ({ data }: PropsType) => (
  <Grid>
    {data.map((movie: MovieType) => (
      <Thumbnail
        key={movie.imdbID}
        href={`/movie/${movie.imdbID}`}
        poster={movie.Poster}
        title={movie.Title}
        year={movie.Year}
      />
    ))}
  </Grid>
)

export default Results
