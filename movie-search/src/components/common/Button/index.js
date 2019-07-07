// @flow
import React from "react"
import Heart from "../Icons/Heart"
import HeartButton from "./styled"
import type { ButtonPropsType } from "../../../types"

const Button = ({ text, ...props }: ButtonPropsType) => (
  <HeartButton {...props}>
    <Heart />
    {text}
  </HeartButton>
)

export default Button
