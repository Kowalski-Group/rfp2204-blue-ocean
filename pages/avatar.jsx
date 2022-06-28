import React, { useRef } from "react";
import * as faceapi from "face-api.js";
import Webcam from "../components/Webcam";

export default function Avatar() {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const face = useRef(null);

  const updateAvatar = (nosePoint) => {
    const faceEl = face.current;
    // console.log(faceEl.style);
    console.log(nosePoint);
    faceEl.style.transform = "rotate(1deg)";
  };

  const onPlay = () => {
    // console.log("video play event");
    // console.log("canvas", canvasRef.current);

    setInterval(async () => {
      const canvas = canvasRef.current;
      const video = videoRef.current;

      const displaySize = {
        width: video.getBoundingClientRect().width,
        height: video.getBoundingClientRect().height,
      };
      faceapi.matchDimensions(canvas, displaySize);
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions(); // .withFaceDescriptor()?
      // console.log(detections);
      // x pos
      // console.log(detections[0].landmarks.shift.x); //...landmarks.getMouth()
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      const nosePoint = detections[0].landmarks;
      // console.log(detections);
      updateAvatar(nosePoint);
    }, 250);
  };

  return (
    <div className="relative w-[720px] h-[560px] mx-auto">
      <Webcam videoRef={videoRef} onPlay={onPlay} />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 right-0 bottom-0"
      />
      <div
        ref={face}
        className="absolute top-36 left-0 right-0 mx-auto bg-indigo-700 w-24 h-48 rounded-full"
      />
    </div>
  );
}
