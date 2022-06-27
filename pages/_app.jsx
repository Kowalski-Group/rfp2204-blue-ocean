import React from 'react';
import "../styles/globals.css";
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {

  const { user } = pageProps;

  return (
    <UserProvider >
      <Component {...pageProps} />
    </UserProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
