import React from "react"
import PropTypes from "prop-types"

import { Grid } from "./Layout"
import { Thumbnail } from "./common/Thumbnail"

const Results = ({ data }) => (
  <Grid>
    {data.map(movie => (
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

Results.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired
}

export default Results
