// @flow
import React from "react"
import { Text100, Text200, Text300, Text400, TextLink } from "./styled"
import type { LinkPropType } from "../../../types.js"

const Link = ({ href, text }: LinkPropType) => (
  <TextLink href={href}>{text}</TextLink>
)
export { Text100, Text200, Text300, Text400, Link }
