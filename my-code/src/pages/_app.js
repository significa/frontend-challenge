// @flow
import * as React from 'react';
import { MoviesProvider } from '../components/context/MoviesContext';
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
    <MoviesProvider>
      <Component pageProps={pageProps} />
    </MoviesProvider>
  );
};

CustomApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

export default CustomApp;
