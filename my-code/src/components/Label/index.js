// @flow
import React from "react"

import Wrapper from "../../layout/Wrapper"
import { Text100 } from "../Typography/styled"
import { IMDB, Rotten, Label } from "./styled"

type PropsType = {
  value: string
}

export const IMDBLabel = ({ value }: PropsType) => (
  <Label>
    <Wrapper>
      <IMDB />
      <Text100 p={3}>{value}</Text100>
    </Wrapper>
  </Label>
)

export const RottenLabel = ({ value }: PropsType) => (
  <Label>
    <Wrapper>
      <Rotten />
      <Text100 p={3}>{value}</Text100>
    </Wrapper>
  </Label>
)
