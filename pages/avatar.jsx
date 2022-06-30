/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Layout from "../components/Layout/Layout";
import Avatar from "../components/Avatar";

export default function Play() {
  const showAvatar = true;

  return (
    <Layout>
      <div className="relative bg-indigo-100 flex flex-col items-center px-[20%] pt-[20vh] h-[100vh] overflow-hidden">
        <Avatar showAvatar={showAvatar} />
      </div>
    </Layout>
  );
}
