// @flow
import React from "react"
import Grid from "../layout/Grid"
import { SmallThumbnail } from "./Thumbnail/styled"

type PropsType = {
  data: {}
}

type MovieType = {
  imdbID: string,
  Title: string,
  Year: string,
  Poster: string
}

const Results = (props: PropsType) => {
  const { data } = props

  return (
    <Grid>
      {data.map((movie: MovieType) => (
        <a
          href={`/movie/${movie.imdbID}`}
          key={movie.imdbID}
          style={{
            position: "relative",
            marginBottom: "20px"
          }}
        >
          <SmallThumbnail style={{ backgroundImage: `url(${movie.Poster})` }} />
          <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </div>
        </a>
      ))}
    </Grid>
  )
}

export default Results
