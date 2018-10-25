// @flow
import React from "react"
import RegularButton from "./styled"
// @flow
import Heart from "../Icons/Heart"
import Wrapper from "../../layout/Wrapper"
import { Text100 } from "../Typography/styled"

type PropsType = {
  text: string
}

const Button = (props: PropsType) => {
  const { text } = props
  return (
    <RegularButton>
      <Wrapper>
        <Heart />
        <Text100 grey>{text}</Text100>
      </Wrapper>
    </RegularButton>
  )
}

export default Button
