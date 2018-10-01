import React from 'react'
import { shallow } from 'enzyme'

import Logo from '../'
import { Svg, Text, Play, Circle } from '../style'

describe('Logo', () => {
  it('renders correctly', () => {
    const tree = shallow(<Logo loading={false}>content</Logo>)
    expect(tree).toMatchSnapshot()
  })

  it('loading animation state', () => {
    jest.useFakeTimers()

    const tree = shallow(<Logo loading={false}>content</Logo>)
    expect(tree.state().loading).toBe(false)

    // Update prop
    tree.setProps({ loading: true })
    expect(tree.state().loading).toBe(false)

    // Update state after timer
    jest.runOnlyPendingTimers()
    expect(tree.state().loading).toBe(true)

    tree.find(Circle).simulate('animationIteration')
    expect(tree.state().loading).toBe(true)

    // Not updated state
    tree.setProps({ loading: false })
    jest.runOnlyPendingTimers()
    expect(tree.state().loading).toBe(true)

    // Updated state
    tree.find(Circle).simulate('animationIteration')
    expect(tree.state().loading).toBe(false)
  })

  describe('Svg', () => {
    it('renders correctly', () => {
      const tree = shallow(<Svg />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Text', () => {
    it('renders correctly', () => {
      const tree = shallow(<Text />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Play', () => {
    it('renders correctly', () => {
      const tree = shallow(<Play />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Circle', () => {
    it('renders correctly', () => {
      const tree = shallow(<Circle loading={false} />)
      expect(tree).toMatchSnapshot()
    })

    it('renders loading correctly', () => {
      const tree = shallow(<Circle loading />)
      expect(tree).toMatchSnapshot()
    })
  })
})
