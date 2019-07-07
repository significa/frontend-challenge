// @flow
import React from "react"
import { Text100 } from "../Typography/styled"
import { IMDB, Rotten, Label } from "./styled"
import { Wrapper } from "../../Layout"
import type { LabelPropsType } from "../../../types.js"

export const IMDBLabel = ({ value }: LabelPropsType) => (
  <Label>
    <Wrapper>
      <IMDB />
      <Text100 p={3}>{value}</Text100>
    </Wrapper>
  </Label>
)

export const RottenLabel = ({ value }: LabelPropsType) => (
  <Label>
    <Wrapper>
      <Rotten />
      <Text100 p={3}>{value}</Text100>
    </Wrapper>
  </Label>
)
