// @flow
import React from 'react';
import Search from '../components/pages/Search';
import Head from 'next/head';

type Props = {
  baseUrl: string
};

const SearchPage = (props: Props) => {
  const { baseUrl } = props;

  return (
    <>
      <Head>
        <title>What&apos;s in</title>
        <meta name="description" content="Search some movie to what" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={`${baseUrl}/`} />
        <meta property="og:title" content="What's in" />
        <meta property="og:description" content="Search some movie to what" />
        <meta property="og:url" content={`${baseUrl}/`} />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
      </Head>
      <Search />
    </>
  );
};

export const getServerSideProps = () => {
  const { SITE_API_BASE_URL } = process?.env;

  return { props: { baseUrl: SITE_API_BASE_URL } };
};

export default SearchPage;
