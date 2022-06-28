import React from "react";
import YouTube from "react-youtube";
import Image from "next/image";

import Layout from "../components/Layout/Layout";

export default function play() {
  const opts = {
    playerVars: {
      controls: 1,
      rel: 0,
      showinfo: false,
      autoplay: false,
    },
  };

  return (
    <Layout>
      <div className="relative w-[100vw] h-[100vh] flex items-center justify-center">
        <Image
          className="object-cover w-full h-60 scale-125"
          src="/../public/karaoke-background.jpg"
          alt="logo"
          layout="fill"
        />
        <YouTube
          className="absolute top-[40%] object-cover mx-auto"
          videoId="rMSQwIp4Jg8"
          opts={opts}
        />
      </div>
    </Layout>
  );
}
