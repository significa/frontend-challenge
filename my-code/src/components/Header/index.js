import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo What's in" />
    </Container>
  );
}
