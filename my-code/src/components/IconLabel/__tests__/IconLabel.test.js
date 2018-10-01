import React from 'react'
import { shallow } from 'enzyme'

import IconLabel from '../'
import { Wrapper, IconWrapper, TextWrapper } from '../style'

function MockIcon() {
  return null
}

describe('IconLabel', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <IconLabel onClick={() => {}} icon={MockIcon} color="#f00">
        text label
      </IconLabel>
    )
    expect(tree).toMatchSnapshot()
  })

  describe('Wrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<Wrapper />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('IconWrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<IconWrapper color="#0f0" />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('TextWrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<TextWrapper />)
      expect(tree).toMatchSnapshot()
    })
  })
})
