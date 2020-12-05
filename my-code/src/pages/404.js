import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import Layout from '../components/shared/Layout';
import illustrationNotFound from '../assets/illustrations/illustration-movie-not-found.svg';
import styles from './404.css';

const SearchPage = () => {
  const { publicRuntimeConfig } = getConfig();
  const { siteUrl } = publicRuntimeConfig;
  return (
    <>
      <Head>
        <title>404 not found</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Search for a movie" />
        <link rel="canonical" href={siteUrl} />
      </Head>
      <Layout>
        <div className={styles.Wrapper}>
          <img
            className={styles.Illustration}
            alt="Movie not found Illustration"
            src={illustrationNotFound}
          />
          <h3 className={styles.Title}>404 not found :(</h3>
        </div>
      </Layout>
    </>
  );
};

export default SearchPage;
