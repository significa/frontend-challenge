import React from 'react'
import { shallow } from 'enzyme'

import MovieCard from '../'
import {
  Wrapper,
  CoverLink,
  Poster,
  FavoriteButtonWrapper,
  Title,
  Subtitle,
  Content
} from '../style'

function MockIcon() {
  return null
}

describe('MovieCard', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <MovieCard
        id="tt1375666"
        title="The Movie Title"
        poster="https://poster.url"
        year="2000"
        favorite={false}
        link="/movie-link"
        toggleFavorite={() => {}}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders without poster correctly', () => {
    const tree = shallow(
      <MovieCard
        id="tt1375666"
        title="The Movie Title"
        year="2000"
        favorite={false}
        link="/movie-link"
        toggleFavorite={() => {}}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders favorite correctly', () => {
    const tree = shallow(
      <MovieCard
        id="tt1375666"
        title="The Movie Title"
        poster="https://poster.url"
        year="2000"
        favorite
        link="/movie-link"
        toggleFavorite={() => {}}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders favorite without poster correctly', () => {
    const tree = shallow(
      <MovieCard
        id="tt1375666"
        title="The Movie Title"
        year="2000"
        favorite
        link="/movie-link"
        toggleFavorite={() => {}}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it('calls toggleFavorite on click', () => {
    const mockCallback = jest.fn()
    const tree = shallow(
      <MovieCard
        id="tt1375666"
        title="The Movie Title"
        year="2000"
        favorite
        link="/movie-link"
        toggleFavorite={mockCallback}
      />
    )

    tree.find(FavoriteButtonWrapper).simulate('click')
    expect(mockCallback.mock.calls.length).toBe(1)
    expect(mockCallback.mock.calls[0][0]).toBe('tt1375666')
    expect(mockCallback.mock.calls[0][1]).toBe(false)
  })

  describe('Wrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(<Wrapper />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('CoverLink', () => {
    it('renders correctly', () => {
      const tree = shallow(<CoverLink to="some-url" />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Poster', () => {
    it('renders correctly', () => {
      const tree = shallow(<Poster poster="poster-url" />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('FavoriteButtonWrapper', () => {
    it('renders correctly', () => {
      const tree = shallow(
        <FavoriteButtonWrapper icon={MockIcon} onClick={() => {}} />
      )
      expect(tree).toMatchSnapshot()
    })

    it('renders non-visble correctly', () => {
      const tree = shallow(
        <FavoriteButtonWrapper
          icon={MockIcon}
          onClick={() => {}}
          visible={false}
        />
      )
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Title', () => {
    it('renders correctly', () => {
      const tree = shallow(<Title />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Subtitle', () => {
    it('renders correctly', () => {
      const tree = shallow(<Subtitle />)
      expect(tree).toMatchSnapshot()
    })
  })

  describe('Content', () => {
    it('renders correctly', () => {
      const tree = shallow(<Content />)
      expect(tree).toMatchSnapshot()
    })
  })
})
