// @flow
import * as React from 'react';
import './_app.css';

type Props = {
  Component: React.ComponentType<any>,
  pageProps: {
    [key: string]: any
  }
};

const CustomApp = (props: Props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default CustomApp;
