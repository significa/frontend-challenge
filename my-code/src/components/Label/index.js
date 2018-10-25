import React from "react"

import Wrapper from "../../layout/Wrapper"
import { Text100 } from "../Typography/styled"
import { IMDB, Rotten, Label } from "./styled"

export const IMDBLabel = props => (
  <Label>
    <Wrapper>
      <IMDB />
      <Text100 p={3}>{props.value}</Text100>
    </Wrapper>
  </Label>
)

export const RottenLabel = props => (
  <Label>
    <Wrapper>
      <Rotten />
      <Text100 p={3}>{props.value}</Text100>
    </Wrapper>
  </Label>
)
