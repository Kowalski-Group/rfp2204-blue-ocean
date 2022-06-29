import "../styles/globals.css";
import React from "react";
import PropTypes from "prop-types";
import { UserProvider } from "@auth0/nextjs-auth0";

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
