import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function AudioDrawer({ audioURL }) {
  return (
    <motion.div
      key="audio"
      initial={{ y: "100%", opacity: 0, scale: 0.6 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: "100%", opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.2, ease: "anticipate" }}
      className="absolute flex flex-col items-center bottom-0 mx-auto px-12 py-4 bg-indigo-700 rounded-t-3xl"
    >
      <p className="uppercase text-lg tracking-widest text-indigo-50 mb-4">
        🥳 Great Singing! 🎊
      </p>
      <audio src={audioURL} controls>
        <track kind="captions" />
      </audio>
    </motion.div>
  );
}

export default AudioDrawer;

AudioDrawer.propTypes = {
  audioURL: PropTypes.elementType.isRequired,
};
