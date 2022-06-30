import React from "react";
import PropTypes from "prop-types";

function Button({ buttonText, handleClick }) {
  return (
    <button
      type="button"
      className="bg-indigo-50 text-indigo-900 px-4 py-2 text-lg lowercase rounded-full hover:bg-indigo-200 transition-colors duration-200 ease-out text-left"
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
