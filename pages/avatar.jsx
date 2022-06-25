import React, { useRef } from "react";
import Link from "next/link";
import Webcam from "react-webcam";

import styles from "../styles/Home.module.css";

export default function Avatar() {
  const webcam = useRef(null);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">Build Your Avatar</h1>
        <div className="">
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

        <p className={styles.description}>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
