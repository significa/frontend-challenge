import React from 'react'
import { shallow } from 'enzyme'

import Movie from '../'

describe('Movie', () => {
  it('renders correctly', () => {
    const tree = shallow(<Movie loaded error={false} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders not loaded correctly', () => {
    const tree = shallow(<Movie loaded={false} error={false} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders error correctly', () => {
    const tree = shallow(
      <Movie loaded={false} error errorMessage="Error message goes here" />
    )
    expect(tree).toMatchSnapshot()
  })
})
