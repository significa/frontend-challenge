import React from 'react'
import { shallow } from 'enzyme'

import SearchBar from '../'
import { Wrapper, Icon, Input } from '../style'

describe('SearchBar', () => {
  it('renders correctly', () => {
    const tree = shallow(<SearchBar value="search value" onChange={() => {}} />)
    expect(tree).toMatchSnapshot()
  })

  it('calls onChange when values changes', () => {
    const mockCallback = jest.fn()
    const tree = shallow(<SearchBar value="" onChange={mockCallback} />)
    tree.find(Input).simulate('change', { target: { value: 'new value' } })
    expect(mockCallback.mock.calls.length).toBe(1)
    expect(mockCallback.mock.calls[0][0]).toBe('new value')
  })

  describe('Wrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<Wrapper />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Icon', () => {
    it('renders correctly', () => {
      const tree = shallow(<Icon />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Input', () => {
    it('renders correctly', () => {
      const tree = shallow(<Input />)
      expect(tree).toMatchSnapshot()
    })
  })
})
