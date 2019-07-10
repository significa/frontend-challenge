import React from "react"
import PropTypes from "prop-types"

import { Text100, Text200, Text300, Text400, TextLink } from "./styled"

const Link = ({ href, text }) => <TextLink href={href}>{text}</TextLink>

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export { Text100, Text200, Text300, Text400, Link }
