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
import data from "../public/data/data";

export default function Play() {
  const { width, height } = useWindowSize();
  const { user } = useUser();

  const videoTitles = data;

  const [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const [showAudioDrawer, setShowAudioDrawer] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAvatar, setShowAvatar] = useState(true);
  const [suggestedId, setSuggestedId] = useState(["KXrKCVILWN8"]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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

  const onChangeHandler = (words) => {
    let matches = [];
    if (words.length > 0) {
      matches = videoTitles.filter((title) => {
        const regex = new RegExp(`${words}`, "gi");
        return title.title.match(regex);
      });
    }
    console.log("matches", matches);
    setSuggestions(matches);
    setText(words);
  };
  const onSuggestHandler = (suggestion) => {
    setText(suggestion.title);
    setSuggestedId(suggestion.id);
    setSuggestions([]);
  };
  // const { changeVideoId } = value.changeVideoId;
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(suggestedId);
    // changeVideoId(suggestedId);
  };

  const returnSearchbar = () => (
    <div
      className="relative w-[30rem] flex-col z-50 mb-12"
      id="SearchBarWrapper"
    >
      <form className="flex columns-md" onSubmit={(e) => onSubmitHandler(e)}>
        <input
          className="flex px-4 py-1 rounded-full bg-indigo-50 focus:outline-indigo-700 self-center justify-self-center w-full"
          type="text"
          onChange={(e) => onChangeHandler(e.target.value)}
          placeholder="search..."
          value={text}
        />
      </form>
      <div className="absolute border-2 border-indigo-700 mt-2 bg-indigo-100 z-50 rounded-3xl shadow-indigo-600 overflow-hidden">
        <div className="h-64 overflow-y-scroll overflow-x-hidden">
          {suggestions &&
            suggestions.map((suggestion) => (
              <button
                type="button"
                className="w-full text-left px-4 py-1 hover:bg-indigo-200 cursor-pointer"
                key={suggestion}
                onClick={() => onSuggestHandler(suggestion)}
              >
                {" "}
                {suggestion.title}{" "}
              </button>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="relative bg-indigo-100 flex flex-col items-center px-[20%] pt-[16vh] h-[100vh] overflow-hidden">
        <Avatar showAvatar={showAvatar} />
        {showConfetti && <Confetti width={width} height={height} />}
        {returnSearchbar()}
        <div className="video-wrapper">
          <iframe
            className="video-element rounded-3xl"
            src={`https://www.youtube.com/embed/${suggestedId}`}
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
