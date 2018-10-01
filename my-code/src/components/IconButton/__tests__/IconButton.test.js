import React from 'react'
import { shallow } from 'enzyme'

import IconButton from '../'
import { Wrapper } from '../style'

function MockIcon() {
  return null
}

describe('IconButton', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <IconButton onClick={() => {}} label="text label" icon={MockIcon} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('call onClick when clicked', () => {
    const mockCallback = jest.fn()
    const tree = shallow(<IconButton onClick={mockCallback} icon={MockIcon} />)
    tree.simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1)
  })

  describe('Wrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<Wrapper />)
      expect(tree).toMatchSnapshot()
    })
  })
})
