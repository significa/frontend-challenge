import * as React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';

const App = ({ Component, pageProps }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <Component {...pageProps} />
    </Head>
  )
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App