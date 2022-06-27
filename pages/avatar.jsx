import React, { useRef } from "react";
import Link from "next/link";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

export default function Avatar() {
  // const [isLoading, setIsLoading] = useState(true);

  const loadVideoModels = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]);
    console.log("models loaded");
  };

  const handleVideoStart = async () => {
    await loadVideoModels();
  };

  const webcam = useRef(null);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Build Your Avatar</h1>
      <div className="relative">
        <Webcam
          onPlay={handleVideoStart}
          audio={false}
          ref={webcam}
          style={{
            position: "absolute",
            margin: "auto",
            textAlign: "center",
            top: 100,
            left: 0,
            right: 0,
          }}
        />
      </div>

      <p>
        <Link href="/">
          <a>&larr; Go Back</a>
        </Link>
      </p>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
