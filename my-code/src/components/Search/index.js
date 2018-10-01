import React from 'react'

import SearchBar from '../../containers/SearchBar'
import SearchContent from '../../containers/SearchContent'

import { Wrapper } from './style'

export default function Search() {
  return (
    <Wrapper>
      <SearchBar />
      <SearchContent />
    </Wrapper>
  )
}
