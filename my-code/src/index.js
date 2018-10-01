import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'
import createStore from './state/store'

import App from './components/App'
import * as theme from './styles/theme'

const history = createBrowserHistory()
const store = createStore(history)

export default render(
  <App theme={theme} history={history} store={store} />,
  document.getElementById('root')
)
