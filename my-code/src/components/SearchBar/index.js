import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Icon, Input } from './style'

export default function SearchBar({ value, onChange }) {
  return (
    <Wrapper>
      <Icon />
      <Input
        value={value}
        placeholder="Search movies..."
        onChange={event => onChange(event.target.value)}
      />
    </Wrapper>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
