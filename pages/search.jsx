import React from "react";
// import Head from 'next/head';

// import Layout from '../components/Layout/Layout';
// import Container from '../components/Container/Container';
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="flex">
      <SearchBar />
    </div>
  );
}
