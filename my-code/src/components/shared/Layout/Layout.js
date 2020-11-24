import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Logo from '../../../assets/logo.svg';
import styles from './Layout.css';

const Layout = ({ children }) => (
  <div className={styles.Wrapper}>
    <header className={styles.HeaderContent}>
      <Link shallow href="/" as={'/'}>
        <a>
          <Logo />
        </a>
      </Link>
    </header>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
