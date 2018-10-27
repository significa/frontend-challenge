import React from 'react'
import { storiesOf } from '@storybook/react'
import MovieRatings from './index'

const stories = storiesOf('Component MovieRatings', module)

stories.add('MovieRatings IMDB', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <MovieRatings
      ratingsSvg='logo-imdb'
      ratingsText='6.6'
      ratingsBG='yellow' />
  </div>
))
stories.add('MovieRatings Rotten', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <MovieRatings
      ratingsSvg='logo-rotten-tomatoes'
      ratingsText='92%'
      ratingsBG='red' />
  </div>
))
