// @flow
import React from "react"
import RegularButton from "./styled"

import Heart from "../Icons/Heart"

type PropsType = {
  text: string
}

const Button = (props: PropsType) => {
  const { text } = props
  return (
    <RegularButton>
      <Heart />
      {text}
    </RegularButton>
  )
}

export default Button
