import * as React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import './_app.css';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
);

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired
};

export default App;
