'use strict'

import React, { PureComponent } from 'react'
import Header from 'components/header'
import Search from 'components/search'
import Showcase from 'components/showcase'
import './app.scss'

class App extends PureComponent {
  render () {
    return (
      <div className='container'>
        <Header />
        <Search />
        <Showcase />
      </div>
    )
  }
}

export default App
