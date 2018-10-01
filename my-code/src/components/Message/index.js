import React from 'react'
import PropTypes from 'prop-types'

import { Center, Illustration, Title, Subtitle } from './style'

export default function Message({ title, subtitle }) {
  return (
    <Center>
      <Illustration />
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Center>
  )
}

Message.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

Message.defaultProps = {
  title: undefined,
  subtitle: undefined
}
