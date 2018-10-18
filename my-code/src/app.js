'use strict'

import React, { PureComponent } from 'react'
import Header from 'components/header'
import './app.scss'

class App extends PureComponent {
  render () {
    return (
      <div className='container'>
        <Header />
      </div>
    )
  }
}

export default App
