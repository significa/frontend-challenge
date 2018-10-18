import React from 'react'
import IconSvg from '../icon-svg'
import './header.scss'

const Header = () => (
  <header className='header'>
    <div className='header__logo'>
      <IconSvg name='logo' />
    </div>
  </header>
)

export default Header
