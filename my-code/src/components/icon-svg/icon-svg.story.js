import React from 'react'
import { storiesOf } from '@storybook/react'
import IconSvg from './index'

const stories = storiesOf('Component IconSvg', module)

stories.add('IconSvg Logo', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <IconSvg name='logo' />
  </div>
))
stories.add('IconSvg lupa', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <IconSvg name='icon-magnifier-grey' />
  </div>
))
stories.add('IconSvg Heart Grey', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <IconSvg name='icon-heart-grey' />
  </div>
))
stories.add('IconSvg Heart All', () => (
  <div style={{ background: '#0a1014', fontFamily: 'Roboto', padding: 20, width: '100%', display: 'flex' }}>
    <IconSvg name='icon-heart-all' />
  </div>
))
