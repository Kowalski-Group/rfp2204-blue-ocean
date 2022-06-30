import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as faceapi from "face-api.js";

export default function Webcam({ onPlay, videoRef }) {
  const [mediaStream, setMediaStream] = useState();

  const setupMediaStream = async () => {
    try {
      const ms = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: true,
      });
      setMediaStream(ms);
    } catch (e) {
      alert("Camera is disabled");
      throw e;
    }
  };

  const loadVideoModels = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]);
    // console.log("models loaded");
  };

  useEffect(() => {
    // console.log("Webcam useEffect");
    async function setupWebcamVideo() {
      if (!mediaStream) {
        await setupMediaStream();
      } else {
        await loadVideoModels();
        const videoCurr = videoRef.current;
        if (!videoCurr) return;
        const video = videoCurr;
        if (!video.srcObject) {
          video.srcObject = mediaStream;
        }
      }
    }
    setupWebcamVideo();
  });

  return (
    <div className="w-full h-full relative z-0">
      <video
        onPlay={onPlay}
        className="w-full h-full mx-auto object-cover opacity-0"
        ref={videoRef}
        autoPlay
        muted
      />
    </div>
  );
}

Webcam.propTypes = {
  onPlay: PropTypes.elementType.isRequired,
  videoRef: PropTypes.object.isRequired,
};
