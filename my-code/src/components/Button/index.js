// @flow
import React from "react"

import RegularButton from "./styled"
import Heart from "../Icons/Heart"

type PropsType = {
  text: string
}

const Button = ({ text, ...props }: PropsType) => (
  <RegularButton {...props}>
    <Heart />
    {text}
  </RegularButton>
)

export default Button
