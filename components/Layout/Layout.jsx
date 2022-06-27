import React from "react";
import Head from "next/head";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div>
      <Head>
        <title>Sweet Niblets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>this is main</main>
      <Footer />
    </div>
  );
}

export default Layout;
