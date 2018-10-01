import React from 'react'
import { shallow } from 'enzyme'

import Search from '../'
import { Wrapper } from '../style'

describe('Search', () => {
  it('renders correctly', () => {
    const tree = shallow(<Search />)
    expect(tree).toMatchSnapshot()
  })

  describe('Wrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<Wrapper />)
      expect(tree).toMatchSnapshot()
    })
  })
})
