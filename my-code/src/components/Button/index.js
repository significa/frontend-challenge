import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, IconWrapper } from './style'

export default function Button({ icon: Icon, children, onClick, active }) {
  return (
    <Wrapper onClick={onClick} active={active}>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  icon: PropTypes.func,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool
}

Button.defaultProps = {
  icon: undefined,
  active: false
}
