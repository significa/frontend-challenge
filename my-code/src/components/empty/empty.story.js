import React from 'react'
import { storiesOf } from '@storybook/react'
import Empty from './index'

const stories = storiesOf('Component Empty', module)

stories.add('Empty Default', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <Empty />
  </div>
))
stories.add('Empty Prop statusEmpty = hide', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <Empty statusEmpty='hide' />
  </div>
))
stories.add('Empty Prop statusEmpty = show', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <Empty statusEmpty='show' />
  </div>
))
