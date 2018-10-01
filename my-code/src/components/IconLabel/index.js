import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, IconWrapper, TextWrapper } from './style'

export default function IconLabel({ icon: Icon, children, color, ...rest }) {
  return (
    <Wrapper {...rest}>
      <IconWrapper color={color}>
        <Icon />
      </IconWrapper>
      <TextWrapper>{children}</TextWrapper>
    </Wrapper>
  )
}

IconLabel.propTypes = {
  icon: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
}
