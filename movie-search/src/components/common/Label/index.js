import React from "react"
import PropTypes from "prop-types"

import { Text100 } from "../Typography/styled"
import { IMDB, Rotten, Label } from "./styled"
import { Wrapper } from "../../Layout"

export const IMDBLabel = ({ value }) => (
  <Label>
    <Wrapper>
      <IMDB />
      <Text100 p={3}>{value}</Text100>
    </Wrapper>
  </Label>
)

export const RottenLabel = ({ value }) => (
  <Label>
    <Wrapper>
      <Rotten />
      <Text100 p={3}>{value}</Text100>
    </Wrapper>
  </Label>
)

IMDBLabel.propTypes = {
  value: PropTypes.string.isRequired
}

RottenLabel.propTypes = {
  value: PropTypes.string.isRequired
}
