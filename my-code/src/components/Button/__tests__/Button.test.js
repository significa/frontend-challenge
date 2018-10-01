import React from 'react'
import { shallow } from 'enzyme'

import Button from '../'
import { Wrapper, IconWrapper } from '../style'

function MockIcon() {
  return null
}

describe('Button', () => {
  it('renders correctly', () => {
    const button = shallow(<Button onClick={() => {}}>button label</Button>)
    expect(button).toMatchSnapshot()
  })

  it('renders correctly with icon', () => {
    const button = shallow(
      <Button onClick={() => {}} icon={MockIcon}>
        icon button label
      </Button>
    )
    expect(button).toMatchSnapshot()
  })

  it('renders active correctly', () => {
    const button = shallow(
      <Button onClick={() => {}} active>
        active button text
      </Button>
    )
    expect(button).toMatchSnapshot()
  })

  it('calls onClick when clicked', () => {
    const mockCallback = jest.fn()
    const button = shallow(<Button onClick={mockCallback}>button label</Button>)
    button.simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1)
  })

  describe('Wrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<Wrapper />)
      expect(tree).toMatchSnapshot()
    })

    it('renders correclty when active', () => {
      const tree = shallow(<Wrapper active />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('IconWrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<IconWrapper />)
      expect(tree).toMatchSnapshot()
    })
  })
})
