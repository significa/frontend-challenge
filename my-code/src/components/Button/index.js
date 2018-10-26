// @flow
import React from "react"
import Heart from "../Icons/Heart"
import RegularButton from "./styled"
import type { ButtonPropsType } from "../../types"

const Button = ({ text, ...props }: ButtonPropsType) => (
  <RegularButton {...props}>
    <Heart />
    {text}
  </RegularButton>
)

export default Button
