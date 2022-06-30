/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
// import { useWindowSize } from "react-use";
import RecordButton from "../components/RecordButton";
import AudioDrawer from "../components/AudioDrawer";

import Layout from "../components/Layout/Layout";
import useRecorder from "./api/useRecorder";

export default function Play() {
  // const { width, height } = useWindowSize();
  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const [showAudioDrawer, setShowAudioDrawer] = useState(false);

  const handleRecordClicked = () => {
    if (!isRecording) {
      startRecording();
      setShowAudioDrawer(false);
    } else {
      stopRecording();
      setShowAudioDrawer(true);
    }
  };

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
        {showAudioDrawer && <AudioDrawer audioURL={audioURL} />}
        <RecordButton handleClick={handleRecordClicked} />
      </div>
    </Layout>
  );
}
