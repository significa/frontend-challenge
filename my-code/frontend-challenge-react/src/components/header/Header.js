import React from 'react';
import './Header.module.scss';
import logo from '../../img/logo.svg';

const Header = () => (
  <header>
    <a href="./index.html">
      <img src={logo} alt="logo" />
    </a>
  </header>
);

export default Header;
