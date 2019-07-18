import React from "react"
import PropTypes from "prop-types"

import { SmallerText, SmallText, MediumText, BigText, TextLink } from "./styled"

const Link = ({ href, text }) => <TextLink href={href}>{text}</TextLink>

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export { SmallerText, SmallText, MediumText, BigText, Link }
