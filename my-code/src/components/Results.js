// @flow
import React from "react"
import { Grid } from "../layout/Layout"
import { SmallThumbnail, SmallEmptyThumbnail } from "./Thumbnail/styled"
import { Text100, Text200 } from "./Typography/styled"

type PropsType = {
  data: []
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
          {movie.Poster === "N/A" ? (
            <SmallEmptyThumbnail />
          ) : (
            <SmallThumbnail
              style={{ backgroundImage: `url(${movie.Poster})` }}
            />
          )}

          <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
            <Text200>{movie.Title}</Text200>
            <Text100>{movie.Year}</Text100>
          </div>
        </a>
      ))}
    </Grid>
  )
}

export default Results
