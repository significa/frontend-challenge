import React from 'react'
import { shallow } from 'enzyme'

import {
  Wrapper,
  Row,
  MetaText,
  Title,
  Text,
  Heading,
  PosterWrapper,
  Poster,
  Paragraph,
  Subgrid
} from '../style'

describe('MovieContent', () => {
  describe('Wrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<Wrapper>content</Wrapper>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Row', () => {
    it('renders correctly', () => {
      const tree = shallow(<Row>content</Row>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('MetaText', () => {
    it('renders correctly', () => {
      const tree = shallow(<MetaText>content</MetaText>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Title', () => {
    it('renders correctly', () => {
      const tree = shallow(<Title>content</Title>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Title', () => {
    it('renders correctly', () => {
      const tree = shallow(<Title>content</Title>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Text', () => {
    it('renders correctly', () => {
      const tree = shallow(<Text>content</Text>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Heading', () => {
    it('renders correctly', () => {
      const tree = shallow(<Heading>content</Heading>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('PosterWrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<PosterWrapper>content</PosterWrapper>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Poster', () => {
    it('renders correctly', () => {
      const tree = shallow(<Poster>content</Poster>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Paragraph', () => {
    it('renders correctly', () => {
      const tree = shallow(<Paragraph>content</Paragraph>)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Subgrid', () => {
    it('renders correctly', () => {
      const tree = shallow(<Subgrid>content</Subgrid>)
      expect(tree).toMatchSnapshot()
    })
  })
})
