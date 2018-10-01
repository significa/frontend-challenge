import React from 'react'
import { shallow } from 'enzyme'

import MovieContent from '../'

import Button from '../../Button'
import IconButton from '../../IconButton'

describe('MovieContent', () => {
  const defaultData = {
    id: 'tt0082096',
    runtime: '99 min',
    year: '2000',
    rated: 'R',
    title: 'Another Movie Title',
    imdbRating: '8.3',
    favorite: false,
    plot: 'Lorem ipsum dolor sit amet',
    actors: ['aaaa', 'bbbbbb'],
    genres: ['xxx', 'vvvvvv'],
    directors: ['ccccccc', 'ooo'],
    goBack: () => {},
    toggleFavorite: () => {}
  }

  it('renders correctly', () => {
    const tree = shallow(<MovieContent {...defaultData} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders favorite correctly', () => {
    const tree = shallow(<MovieContent {...defaultData} favorite />)
    expect(tree).toMatchSnapshot()
  })

  it('renders poster correctly', () => {
    const tree = shallow(<MovieContent {...defaultData} poster="url.jpg" />)
    expect(tree).toMatchSnapshot()
  })

  it('renders rottenRating correctly', () => {
    const tree = shallow(<MovieContent {...defaultData} rottenRating="77%" />)
    expect(tree).toMatchSnapshot()
  })

  it('calls goBack', () => {
    const mockCallback = jest.fn()
    const tree = shallow(
      <MovieContent {...defaultData} goBack={mockCallback} />
    )
    tree.find(IconButton).simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1)
  })

  it('calls toggleFavorite', () => {
    const mockCallback = jest.fn()
    const tree = shallow(
      <MovieContent {...defaultData} toggleFavorite={mockCallback} />
    )
    tree.find(Button).simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1)
    expect(mockCallback.mock.calls[0][0]).toBe('tt0082096')
    expect(mockCallback.mock.calls[0][1]).toBe(true)
  })
})
