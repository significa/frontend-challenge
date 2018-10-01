import React from 'react'
import { shallow } from 'enzyme'

import { createStore } from 'redux'

import App from '../'

describe('App', () => {
  it('renders correctly', () => {
    const store = createStore(() => {})
    const history = {}
    const theme = {}
    const app = shallow(<App history={history} store={store} theme={theme} />)

    expect(app).toMatchSnapshot()
  })
})
