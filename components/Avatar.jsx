import React, { useRef } from "react";
import { useWindowSize } from "react-use";

import * as faceapi from "face-api.js";
import Webcam from "./Webcam";

export default function Avatar() {
  const { width, height } = useWindowSize();
  console.log("wh", width, height);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const face = useRef(null);
  const mouth = useRef(null);
  const leftEyebrow = useRef(null);
  const rightEyeBrow = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const updateAvatar = (video, positions) => {
    if (!positions) return;
    const nosePoint = positions[33];
    const mouthHeight = positions[58].y - positions[52].y;
    // const leftEyeBrowY = positions[20].y
    // const rightEyeBrowY = positions[25].y

    if (!nosePoint || !video) return;
    const faceEl = face.current;
    const mouthEl = mouth.current;
    const leftEyebrowEl = leftEyebrow.current;
    const rightEyeBrowEl = rightEyeBrow.current;
    const leftEyeEl = leftEyeRef.current;
    const rightEyeEl = rightEyeRef.current;
    // const midX = video.getBoundingClientRect().width / 2;
    // const midY = video.getBoundingClientRect().height / 2;
    const faceRect = faceEl.getBoundingClientRect();
    // const faceElInitialPos = faceEl.getBoundingClientRect();
    // console.log(faceEl.style);

    // console.log(nosePoint.x - faceElInitialPos.x);
    // console.log(midX);
    // faceEl.style.transform = `scale3d(2, 2, 1)`;
    // console.log("faceRect", faceRect);
    // console.log("nosePoint", nosePoint);
    faceEl.style.transform = `translate3d(${
      nosePoint.x * 2 - width / 2 + faceRect.width / 2
    }px, ${nosePoint.y * 2 - height / 2 + faceRect.height / 2}px, 0)`;
    mouthEl.style.height = `${Math.min(mouthHeight / 12, 6)}rem`;
    leftEyebrowEl.style.transform = `translate3d(0, ${mouthHeight * -1}px, 0)`;
    rightEyeBrowEl.style.transform = `translate3d(0, ${mouthHeight * -1}px, 0)`;

    // leftEyeEl.style.height = mouthHeight / 4
    leftEyeEl.style.transform = `scale3d(1, ${Math.min(
      30 / mouthHeight,
      1
    )}, 1)`;
    rightEyeEl.style.transform = `scale3d(1, ${Math.min(
      30 / mouthHeight,
      1
    )}, 1)`;
    // mouthEl.style.transform = `scale3d(1, ${mouthHeight / 12}, 1)`;
  };

  const onPlay = () => {
    // console.log("video play event");
    // console.log("canvas", canvasRef.current);

    setInterval(async () => {
      const canvas = canvasRef.current;
      if (!videoRef) return;
      const video = videoRef.current;

      const displaySize = {
        width: video.getBoundingClientRect().width,
        height: video.getBoundingClientRect().height,
      };
      faceapi.matchDimensions(canvas, displaySize);
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      // const resizedDetections = faceapi.resizeResults(detections, displaySize);
      // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      // faceapi.draw.drawDetections(canvas, resizedDetections);
      // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      // faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

      const positions = detections[0]?.landmarks.positions;

      updateAvatar(video, positions);
    }, 250);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <Webcam videoRef={videoRef} onPlay={onPlay} />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 right-0 bottom-0"
      />
      <div
        ref={face}
        className="absolute left-0 right-0 bottom-auto top-36 mx-auto bg-indigo-700 w-44 h-60 rounded-full transition-transform duration-500 ease-in-out border-4 border-indigo-100 overflow-hidden z-50"
      >
        {/* hair */}
        <div className="absolute -top-1/3 bg-indigo-200 rounded-full w-full h-2/3 -mt-20 -ml-16 z-50" />
        {/* hair */}
        {/* <div className="absolute bg-indigo-200 rounded-full w-full h-2/3 -mt-18 -mr-24 z-50" /> */}
        {/* left eye */}
        <div
          ref={leftEyeRef}
          className="absolute top-1/4 left-6 bg-indigo-100 w-12 h-12 rounded-full border-2 border-indigo-100 flex items-center justify-center z-10 transition-transform duration-500 ease-in-out"
        >
          <div
            ref={leftEyebrow}
            className="absolute h-4 w-8 -top-4 left-0 right-0 mx-auto bg-indigo-100 rounded-full border-2 border-indigo-700 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute w-8 h-8 bg-indigo-800 rounded-full" />
          <div className="absolute w-4 h-4 mb-4 mr-4 bg-indigo-100 rounded-full" />
        </div>
        {/* right eye */}
        <div
          ref={rightEyeRef}
          className="absolute top-1/4 right-6 bg-indigo-100 w-12 h-12 rounded-full border-2 border-indigo-100 flex items-center justify-center transition-transform duration-500 ease-in-out"
        >
          <div
            ref={rightEyeBrow}
            className="absolute h-4 w-8 -top-4 left-0 right-0 mx-auto bg-indigo-100 rounded-full border-2 border-indigo-700 transition-all duration-500 ease-in-out"
          />
          <div className="absolute w-8 h-8 bg-indigo-800 rounded-full" />
          <div className="absolute w-4 h-4 mb-4 mr-4 bg-indigo-100 rounded-full" />
        </div>
        {/* nose */}
        <div className="absolute w-4 h-2 top-1/2 left-1/2 -ml-2 mt-1 bg-indigo-100 rounded-full" />
        {/* mouth */}
        <div
          ref={mouth}
          className="absolute top-2/3 mx-auto left-0 right-0 w-14 h-8 border-4 rounded-t-lg rounded-b-3xl overflow-hidden transition-all duration-500 ease-in-out bg-indigo-800"
        >
          {/* tongue */}
          <div className="absolute bg-rose-400 bottom-0 right-0 left-0 w-6 h-2 mx-auto rounded-full" />
          {/* teeth */}
          <div className="absolute bg-indigo-100 top-0 right-0 left-0 w-10 h-2 mx-auto rounded-b-full" />
        </div>
      </div>
    </div>
  );
}
