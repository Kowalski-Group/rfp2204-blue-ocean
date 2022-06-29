import React from "react";
import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Container from "../components/Container/Container";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Head>
          <title>Sweet Niblets</title>
          <meta
            name="description"
            content="A karaoke app to sing along to with your favorite avatar"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Container>
    </Layout>
  );
}
