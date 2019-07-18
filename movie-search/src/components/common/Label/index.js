import React from "react"
import PropTypes from "prop-types"

import { SmallerText } from "../Typography/styled"
import { IMDB, Rotten, Label } from "./styled"
import { Wrapper } from "../../Layout"

export const IMDBLabel = ({ value }) => (
  <Label>
    <Wrapper>
      <IMDB />
      <SmallerText p={3}>{value}</SmallerText>
    </Wrapper>
  </Label>
)

export const RottenLabel = ({ value }) => (
  <Label>
    <Wrapper>
      <Rotten />
      <SmallerText p={3}>{value}</SmallerText>
    </Wrapper>
  </Label>
)

IMDBLabel.propTypes = {
  value: PropTypes.string.isRequired
}

RottenLabel.propTypes = {
  value: PropTypes.string.isRequired
}
