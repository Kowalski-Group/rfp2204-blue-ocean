/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useUser } from "@auth0/nextjs-auth0";
import RecordButton from "../components/RecordButton";
import AudioDrawer from "../components/AudioDrawer";
import Layout from "../components/Layout/Layout";
import useRecorder from "./api/useRecorder";
import Avatar from "../components/Avatar";
import Button from "../components/Button/Button";

export default function Play() {
  const { width, height } = useWindowSize();
  const { user } = useUser();
  console.log(user);

  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const [showAudioDrawer, setShowAudioDrawer] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAvatar, setShowAvatar] = useState(true);

  const handleRecordClicked = () => {
    if (!isRecording) {
      startRecording();
      setShowAudioDrawer(false);
    } else {
      stopRecording();
      setShowAudioDrawer(true);
    }
  };

  const handleShowConfettiClicked = () => {
    setShowConfetti(!showConfetti);
  };

  const handleShowAvatarClicked = () => {
    setShowAvatar(!showAvatar);
  };

  return (
    <Layout>
      <div className="relative bg-indigo-100 flex flex-col items-center px-[20%] pt-[20vh] h-[100vh] overflow-hidden">
        <Avatar showAvatar={showAvatar} />
        {showConfetti && <Confetti width={width} height={height} />}
        <div className="video-wrapper">
          <iframe
            className="video-element rounded-3xl"
            src="https://www.youtube.com/embed/KXrKCVILWN8"
            title="YouTube Player"
            allowFullScreen
          />
          <p className="absolute -ml-[12rem] -mt-[8rem] text-[20rem] opacity-25 -rotate-12">
            ⭐️
          </p>
          <p className="absolute top-[18rem] -ml-[16rem] text-[8rem] opacity-25 rotate-12">
            ⭐️
          </p>
          <p className="absolute top-[26rem] -ml-[6rem] text-[6rem] opacity-25 -rotate-45">
            ⭐️
          </p>
          <p className="absolute top-0 right-0 -mr-[16rem] -mt-[15rem] text-[25rem] opacity-25 rotate-45">
            ⭐️
          </p>
          <p className="absolute right-0 top-[18rem] -mr-[16rem] text-[8rem] opacity-25 -rotate-12">
            ⭐️
          </p>
          <p className="absolute bottom-0 right-0 -mr-[10rem] -mb-[18rem] text-[20rem] opacity-25">
            💫
          </p>
          <p className="absolute bottom-0 right-0 font-Audiowide uppercase font-black -mr-[10rem] -mb-16 text-indigo-300 shadow-indigo-400 text-6xl opacity-50 -rotate-12">
            Go {user ? user.given_name : "for it"}!
          </p>
        </div>
        {showAudioDrawer && <AudioDrawer audioURL={audioURL} />}
        <RecordButton handleClick={handleRecordClicked} />
        <div className="absolute left-4 bottom-4 flex flex-col gap-2">
          <Button
            handleClick={handleShowConfettiClicked}
            buttonText={showConfetti ? "🚫 Confetti" : "🎊 Confetti"}
          />
          <Button
            handleClick={handleShowAvatarClicked}
            buttonText={showAvatar ? "🚫 Avatar" : "🥳 Avatar"}
          />
        </div>
      </div>
    </Layout>
  );
}
