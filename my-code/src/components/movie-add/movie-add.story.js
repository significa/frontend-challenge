import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MovieAdd from './index'

const stories = storiesOf('Component MovieAdd', module)

stories.add('MovieAdd', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <MovieAdd disableFavourites={false} handleFavourites={action('click')} imdb='1' />
  </div>
))
stories.add('MovieAdd Added', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <MovieAdd disableFavourites={true} handleFavourites={action('click')} imdb='3' />
  </div>
))
