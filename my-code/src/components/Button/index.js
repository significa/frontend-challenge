// @flow
import React from "react"

import RegularButton from "./styled"
import Heart from "../Icons/Heart"
import { Text100 } from "../Typography/styled"

type PropsType = {
  text: string
}

const Button = ({ text }: PropsType) => (
  <RegularButton>
    <Heart />
    <Text100 pl={2} grey>
      {text}
    </Text100>
  </RegularButton>
)

export default Button
