import React, { useRef, useState } from "react";
import Link from "next/link";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

export default function Avatar() {
  const [facePos, setFacePos] = useState({ x: 0, y: 0 }); // TODO set to middle of screen.

  if (faceapi) {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => console.log("complete"));
  }
  const webcam = useRef(null);

  const createVideoCanvas = () => {
    const { video } = webcam.current;
    const canvas = document.querySelector("canvas");
    // const canvas = faceapi.createCanvasFromMedia(video);
    // video.parentNode.append(canvas);
    const displaySize = { width: 720, height: 560 }; // TODO don't hardcode these
    // console.log("displaySize", displaySize);
    faceapi.matchDimensions(canvas, displaySize);
    setInterval(async () => {
      const detections = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions(); // .withFaceDescriptor()?
      // console.log(detections);
      // x pos
      // console.log(detections[0].landmarks.shift.x); // ...landmarks.getMouth()
      if (!detections) return;
      // console.log("nose", detections[0].landmarks.getNose());
      // const resizedDetections = faceapi.resizeResults(detections, displaySize);
      // canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      // faceapi.draw.drawDetections(canvas, resizedDetections);
      // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      // faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      const center = detections.landmarks.positions[33];
      setFacePos({ x: center.x, y: center.y });
    }, 1000);
  };

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">Build Your Avatar</h1>
        <div className="relative w-[720px] h-[560px] mx-auto transition-all duration-200">
          <Webcam
            onPlay={createVideoCanvas}
            audio={false}
            ref={webcam}
            style={{
              position: "absolute",
              margin: "auto",
              width: 720,
              height: 560,
              top: 0,
              left: 0,
              right: 0,
              opacity: 0.5,
            }}
          />
          <canvas className="absolute top-0 left-0 right-0 mx-auto z-10" />
          <div
            id="face"
            className="bg-yellow-500 rounded-full"
            style={{
              position: "absolute",
              width: 200,
              height: 200,
              top: facePos.y - 50,
              left: facePos.x - 50,
              transition: "all",
            }}
          >
            <div id="mouth" className="absolute text-5xl top-2/3 left-20 z-30">
              🫦
            </div>
            <div id="eye1" className="absolute text-5xl top-1/3 left-8">
              👁
            </div>
            <div id="eye2" className="absolute text-5xl top-1/3 left-32">
              👁
            </div>
          </div>
        </div>

        <p>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
