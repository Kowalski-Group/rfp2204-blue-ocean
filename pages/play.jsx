import React from "react";
import YouTube from "react-youtube";
import Image from "next/image";

export default function play() {
  const opts = {
    playerVars: {
      controls: 0,
      rel: 0,
      showinfo: false,
      autoplay: true,
    },
  };

  return (
    <div>
      <Image src='/../public/karaoke-background.jpg' alt='logo' layout='fill' />
      <YouTube
        style={{
          position: "absolute",
          width: "100%",
          height: "10%",
          top: "70%",
          left: "50%",
          right: "50%",
          objectFit: "cover",
        }}
        videoId='rMSQwIp4Jg8'
        opts={opts}
      />
    </div>
  );
}
