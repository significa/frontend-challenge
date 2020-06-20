// @flow

import * as React from 'react';
import styles from './Layout.css';
import Link from 'next/link';
import logo from '../../../icons/logo.svg';

type Props = {
  children: React.Node
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.Wrapper}>
      <header className={styles.Header}>
        <Link shallow href="/" as={'/'}>
          <a>
            <img alt="What's in logo" src={logo} />
          </a>
        </Link>
      </header>
      {children}
    </div>
  );
};

export default Layout;
