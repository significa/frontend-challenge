import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import Search from '../components/pages/Search';

const SearchPage = props => {
  const { publicRuntimeConfig } = getConfig();
  const { siteUrl } = publicRuntimeConfig;
  return (
    <>
      <Head>
        <title>Whats in</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content="Search for a movie" />
        <link rel="canonical" href={siteUrl} />
      </Head>
      <Search {...props} />
    </>
  );
};

export default SearchPage;
