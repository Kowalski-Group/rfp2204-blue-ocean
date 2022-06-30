/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
// import { useWindowSize } from "react-use";
import RecordButton from "../components/RecordButton";

import Layout from "../components/Layout/Layout";
import useRecorder from "./api/useRecorder";

export default function Play() {
  // const { width, height } = useWindowSize();
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();

  return (
    <Layout>
      <div className="relative bg-indigo-100 flex flex-col items-center px-[20%] pt-36 h-[100vh] overflow-hidden">
        {/* <Confetti width={width} height={height} /> */}
        <div className="video-wrapper">
          <iframe
            className="video-element rounded-3xl"
            src="https://www.youtube.com/embed/KXrKCVILWN8"
            title="YouTube Player"
            allowFullScreen
          />
        </div>
        <div>
          <audio src={audioURL} controls>
            <track kind="captions" />
          </audio>
        </div>
        <RecordButton
          handleClick={!isRecording ? startRecording : stopRecording}
        />
      </div>
    </Layout>
  );
}
