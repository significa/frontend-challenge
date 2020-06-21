import React from 'react';
import Layout from '../components/shared/Layout';
import rottenTomatoesLogo from '../icons/logo-rotten-tomatoes.svg';
import styles from './404.css';

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.Wrapper}>
        <img className={styles.NotFoundImg} src={rottenTomatoesLogo} />
        <h1 className={styles.NotFound}>404 Not found</h1>
      </div>
    </Layout>
  );
}
