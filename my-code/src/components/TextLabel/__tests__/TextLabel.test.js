import React from 'react'
import { shallow } from 'enzyme'

import TextLabel from '../'

describe('TextLabel', () => {
  it('renders correctly', () => {
    const tree = shallow(<TextLabel>label text</TextLabel>)
    expect(tree).toMatchSnapshot()
  })
})
