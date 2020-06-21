// @flow
import * as React from 'react';
import ProgressBar from '../components/shared/ProgressBar';
import './_app.css';

type Props = {
  Component: React.ComponentType<any>,
  pageProps: {
    [key: string]: any
  }
};

const CustomApp = (props: Props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
