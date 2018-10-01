import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './style'

export default function IconButton({ label, icon: Icon, ...rest }) {
  return (
    <Wrapper aria-label={label} {...rest}>
      <Icon />
    </Wrapper>
  )
}

IconButton.propTypes = {
  icon: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string
}

IconButton.defaultProps = {
  label: undefined
}
