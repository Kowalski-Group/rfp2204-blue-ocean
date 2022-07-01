import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Sweet Niblets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <body className="flex flex-col">
        <main className="flex-grow">{children}</main>
      </body>
      {/* <Footer /> */}
    </div>
  );
}

// Layout.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
// };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
