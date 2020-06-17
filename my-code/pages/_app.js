// @flow
import * as React from 'react';

type Props = {
  Component: React.ComponentType<any>,
  pageProps: {
    [key: string]: any
  }
};

const CustomApp = (props: Props) => {
  const { Component, pageProps } = props;

  return <Component pageProps={pageProps} />;
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
