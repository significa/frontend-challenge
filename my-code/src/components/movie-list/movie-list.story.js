import React from 'react'
import { storiesOf } from '@storybook/react'
import MovieList from './index'

const stories = storiesOf('Component MovieList', module)

stories.add('MovieList One Item', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <MovieList listTitle='Cast' list='Henrique' />
  </div>
))
stories.add('MovieList Two Item', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <MovieList listTitle='Cast' list='Henrique, Melanda' />
  </div>
))
stories.add('MovieList Director', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <MovieList listTitle='Director' list='Enzo Duarte, JustinLin, Me contrata' />
  </div>
))
