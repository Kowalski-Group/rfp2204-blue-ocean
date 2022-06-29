/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import YouTube from "react-youtube";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Image from "next/image";

import Layout from "../components/Layout/Layout";
import useRecorder from "./api/useRecorder";

export default function Play() {
  const opts = {
    playerVars: {
      controls: 1,
      rel: 0,
      showinfo: false,
      autoplay: false,
    },
  };

  const { width, height } = useWindowSize();
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  return (
    <Layout>
      <div className='relative w-[100vw] h-[80vh] flex items-center justify-center'>
        <Confetti width={width} height={height} />
        <Image
          className='object-cover w-full scale-125'
          src='/karaoke-background.jpg'
          alt='logo'
          layout='fill'
        />
        <YouTube
          className='absolute top-[40%] object-cover mx-auto'
          videoId='rMSQwIp4Jg8'
          opts={opts}
        />
      </div>
      <div>
        <audio src={audioURL} controls>
          <track kind='captions' />
        </audio>
        <button type='button' onClick={startRecording} disabled={isRecording}>
          start recording
        </button>
        <button type='button' onClick={stopRecording} disabled={!isRecording}>
          stop recording
        </button>
      </div>
    </Layout>
  );
}
