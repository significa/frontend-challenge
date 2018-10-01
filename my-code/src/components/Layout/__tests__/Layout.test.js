import React from 'react'
import { shallow } from 'enzyme'

import Layout from '../'
import { Outer } from '../style'

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = shallow(<Layout>content</Layout>)
    expect(tree).toMatchSnapshot()
  })

  describe('Outer', () => {
    it('renders correctly', () => {
      const tree = shallow(<Outer />)
      expect(tree).toMatchSnapshot()
    })
  })
})
