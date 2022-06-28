import React from "react";
import Head from "next/head";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">this is main</main>
      </body>
      <Footer />
    </div>
  );
}

export default Layout;
