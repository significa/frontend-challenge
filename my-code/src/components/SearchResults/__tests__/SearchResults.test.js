import React from 'react'
import { shallow } from 'enzyme'

import SearchResults from '../'
import { Wrapper } from '../style'

describe('SearchResults', () => {
  it('renders correctly', () => {
    const tree = shallow(<SearchResults ids={['tt0086567', 'tt0434409']} />)
    expect(tree).toMatchSnapshot()
  })

  describe('Wrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<Wrapper />)
      expect(tree).toMatchSnapshot()
    })
  })
})
