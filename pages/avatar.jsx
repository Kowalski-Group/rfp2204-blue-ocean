import React, { useRef, useState } from "react";
import Link from "next/link";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

export default function Avatar() {
  // if (typeof window !== "undefined") {
  //   SCREEN_MIDDLE_X = window.innerHeight / 2;
  //   console.log("mid", SCREEN_MIDDLE_X);
  // }
  const FACE_SIZE = 200;
  // const [screenMiddle, setScreenMiddle] = useState(0); // TODO set to middle of screen.
  const [nosePoint, setNosePoint] = useState({ x: 0, y: 0 });
  // const [mouthSize, setMouthSize] = useState(30);

  // useEffect(() => {
  //   setScreenMiddle(window.innerHeight / 2);
  // }, []);

  if (faceapi) {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]).then(() => {});
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
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      faceapi.draw.drawDetections(canvas, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      const center = detections.landmarks.positions[33];
      setNosePoint({ x: center.x, y: center.y });
      // setMouthSize(center.x / 10);
      // console.log(mouthSize);
    }, 250);
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
              width: FACE_SIZE,
              height: FACE_SIZE,
              transform: `translate3d(${nosePoint.x - FACE_SIZE / 2}px, ${
                nosePoint.y - FACE_SIZE / 2
              }px, 0px)`,
              transition: "all",
              transitionDuration: "250ms",
              transitionTimingFunction: "ease",
              top: 0,
              left: 0,
            }}
          >
            <div
              id="mouth"
              className="absolute top-2/3 left-20 z-30"
              style={{
                fontSize: 60,
              }}
            >
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
