import React from 'react';
import './Header.module.scss';
import logo from '../../img/logo.svg';

const Header = () => (
  <header>
    <img src={logo} className="App-logo" alt="logo" />
  </header>
);

export default Header;
