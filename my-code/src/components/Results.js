// @flow
import React from "react"
import Grid from "../layout/Grid"
import Thumbnail from "./Thumbnail/styled"

const Results = props => (
  <Grid>
    {props.data.map(movie => (
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <Thumbnail
          style={{ backgroundImage: `url(${movie.Poster})` }}
          key={movie.imdbID}
        />
        <div style={{ position: "absolute", bottom: "12px", left: "12px" }}>
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
        </div>
      </div>
    ))}
  </Grid>
)

export default Results
