import React, { useRef } from "react";
import Link from "next/link";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

export default function Avatar() {
  console.log(faceapi);
  const webcam = useRef(null);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Build Your Avatar</h1>
      <div className="relative">
        <Webcam
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
