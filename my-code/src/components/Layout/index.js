import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../containers/Logo'
import { Outer } from './style'

export default function Layout({ children }) {
  return (
    <Outer>
      <Logo />
      {children}
    </Outer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
