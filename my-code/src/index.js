import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { register } from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

register()
