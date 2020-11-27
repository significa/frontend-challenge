import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import logo from '../../../assets/logo.svg';
import styles from './Layout.css';

const Layout = ({ children }) => (
  <div className={styles.Wrapper}>
    <header className={styles.HeaderContent}>
      <Link shallow href="/" as={'/'}>
        <a>
          <img title="What's in" alt="What's in" src={logo} />
        </a>
      </Link>
    </header>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
