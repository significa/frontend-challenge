import React from 'react'
import { shallow } from 'enzyme'

import Message from '../'
import { Center, Illustration, Title, Subtitle } from '../style'

describe('Message', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Message title="message title" subtitle="message subtitle" />
    )
    expect(tree).toMatchSnapshot()
  })

  describe('Center', () => {
    it('renders correctly', () => {
      const tree = shallow(<Center />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Illustration', () => {
    it('renders correctly', () => {
      const tree = shallow(<Illustration />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Title', () => {
    it('renders correctly', () => {
      const tree = shallow(<Title>title text</Title>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Subtitle', () => {
    it('renders correctly', () => {
      const tree = shallow(<Subtitle>subtitle text</Subtitle>)
      expect(tree).toMatchSnapshot()
    })
  })
})
