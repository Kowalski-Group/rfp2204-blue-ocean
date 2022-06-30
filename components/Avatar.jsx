import React, { useRef, useState } from "react";
import { useWindowSize } from "react-use";
import PropTypes from "prop-types";
import * as faceapi from "face-api.js";
import Webcam from "./Webcam";
import Loader from "./Loader";

export default function Avatar({ showAvatar }) {
  const { width, height } = useWindowSize();
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const face = useRef(null);
  const mouth = useRef(null);
  const leftEyebrow = useRef(null);
  const rightEyeBrow = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  let opacityString = "opacity-90";
  if (showAvatar) {
    opacityString = "opacity-90";
  } else {
    opacityString = "opacity-0";
  }

  const updateAvatar = (video, positions) => {
    if (!positions) return;
    const nosePoint = positions[34];
    const mouthHeight = positions[58].y - positions[52].y;

    if (!nosePoint || !video) return;
    const faceEl = face.current;
    const mouthEl = mouth.current;
    const leftEyebrowEl = leftEyebrow.current;
    const rightEyeBrowEl = rightEyeBrow.current;
    const leftEyeEl = leftEyeRef.current;
    const rightEyeEl = rightEyeRef.current;
    const faceRect = faceEl.getBoundingClientRect();

    const pagePercent = faceRect.x / width;
    let angleInDeg = pagePercent * 180 - 90;
    if (angleInDeg > 90) angleInDeg = 90;
    if (angleInDeg < -90) angleInDeg = -90;
    const xTranslate = (
      (nosePoint.x - width / 2 - faceRect.width / 2) *
      -1
    ).toFixed(0);
    const yTranslate = (nosePoint.y - height / 2 + faceRect.height / 2).toFixed(
      0
    );

    faceEl.style.transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) rotate3d(0, 0, 1, ${angleInDeg.toFixed(
      0
    )}deg)`;

    mouthEl.style.height = `${Math.min(mouthHeight / 12, 6)}rem`;

    leftEyebrowEl.style.transform = `translate3d(0, ${
      mouthHeight * -1
    }px, 0) rotate3d(0, 0, 1, -6deg)`;
    rightEyeBrowEl.style.transform = `translate3d(0, ${
      mouthHeight * -1
    }px, 0) rotate3d(0, 0, 1, 6deg)`;

    leftEyeEl.style.transform = `scale3d(1, ${Math.min(
      30 / mouthHeight,
      1
    )}, 1)`;
    rightEyeEl.style.transform = `scale3d(1, ${Math.min(
      30 / mouthHeight,
      1
    )}, 1)`;
  };

  const onPlay = () => {
    setInterval(async () => {
      const canvas = canvasRef.current;
      if (!videoRef) return;
      const video = videoRef.current;
      if (!video) return;

      const displaySize = {
        width: video.getBoundingClientRect().width,
        height: video.getBoundingClientRect().height,
      };
      faceapi.matchDimensions(canvas, displaySize);
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      if (isLoading) {
        setIsLoading(false);
      }

      // UNCOMMENT BELOW LINES TO SHOW DETECTION POINTS
      // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      // faceapi.draw.drawDetections(canvas, resizedDetections);
      // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      // faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

      const positions = resizedDetections[0]?.landmarks.positions;

      // Animate avatar position
      updateAvatar(video, positions);
    }, 250);
  };

  const handleVideoPlay = () => {
    onPlay();
  };

  const returnAvatar = () => (
    <div
      ref={face}
      className={`absolute left-0 right-0 bottom-auto top-36 mx-auto bg-indigo-700 w-44 h-60 rounded-full transition-all duration-500 ease-in-out border-4 border-indigo-100 overflow-hidden z-50 ${opacityString}`}
    >
      {/* hair 1 */}
      <div className="absolute bg-indigo-200 rounded-full w-full h-2/3 -mt-20 -ml-16" />
      {/* hair 2 */}
      <div className="absolute bg-indigo-200 rounded-full w-full h-2/3 -mt-20 -right-24" />
      {/* left eye */}
      <div
        ref={leftEyeRef}
        className="absolute top-1/4 left-6 bg-indigo-100 w-12 h-12 rounded-full border-2 border-indigo-100 flex items-center justify-center z-10 transition-transform duration-500 ease-in-out"
      >
        <div
          ref={leftEyebrow}
          className="absolute h-4 w-8 -top-4 left-0 right-0 mx-auto bg-indigo-100 rounded-full border-2 border-indigo-700 transition-transform duration-500 ease-in-out -rotate-6"
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
          className="absolute h-4 w-8 -top-4 left-0 right-0 mx-auto bg-indigo-100 rounded-full border-2 border-indigo-700 transition-all duration-500 ease-in-out rotate-6"
        />
        <div className="absolute w-8 h-8 bg-indigo-800 rounded-full" />
        <div className="absolute w-4 h-4 mb-4 mr-4 bg-indigo-100 rounded-full" />
      </div>
      {/* nose */}
      {isLoading ? (
        <div className="absolute top-1/2 left-0 right-0 mx-auto text-center z-50">
          <Loader />
          <p className="bg-indigo-100 mt-2 text-sm text-indigo-900 text-center uppercase tracking-wider">
            Facial Recognition is Loading
          </p>
        </div>
      ) : (
        <div className="absolute w-4 h-2 top-1/2 left-1/2 -ml-2 mt-1 bg-indigo-100 rounded-full" />
      )}
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
  );

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <Webcam videoRef={videoRef} onPlay={handleVideoPlay} />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 right-0 bottom-0"
      />
      {returnAvatar()}
    </div>
  );
}

Avatar.propTypes = {
  showAvatar: PropTypes.bool.isRequired,
};
