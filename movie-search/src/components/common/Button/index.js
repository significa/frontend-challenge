import React from "react"
import PropTypes from "prop-types"

import Heart from "../Icons/Heart"
import HeartButton from "./styled"

const Button = ({ text, ...props }) => (
  <HeartButton {...props}>
    <Heart />
    {text}
  </HeartButton>
)

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button
