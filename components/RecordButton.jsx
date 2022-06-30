import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function RecordButton({ handleClick }) {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordButtonClick = () => {
    setIsRecording(!isRecording);
    handleClick();
  };

  return (
    <button
      type="button"
      className="absolute right-8 bottom-8 w-20 h-20 flex items-center justify-center cursor-pointer"
      onClick={handleRecordButtonClick}
    >
      <div
        className={`absolute w-full h-full z-20 rounded-full  hover:bg-rose-400 flex items-center justify-center transition-colors duration-500 ease ${
          !isRecording ? "bg-rose-300" : "bg-rose-500"
        }`}
      >
        <p className="text-xs uppercase text-rose-900">
          {!isRecording ? "Record" : "Stop"}
        </p>
      </div>
      {!isRecording ? (
        <motion.div
          animate={{ scale: 2.0, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-full h-full bg-rose-200 rounded-full"
        />
      ) : (
        ""
      )}
    </button>
  );
}

export default RecordButton;

RecordButton.propTypes = {
  handleClick: PropTypes.elementType.isRequired,
};
