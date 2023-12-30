import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, layoutType }) => {
  const getStyles = () => {
    switch (layoutType) {
      case "A":
        return {
          backgroundColor: "#3b82f6",
          color: "white",
          border: "2px solid white",
        };
      case "B":
        return {
          backgroundColor: "white",
          color: "#3b82f6",
          border: "2px solid #3b82f6",
        };
      default:
        return {};
    }
  };

  const styles = getStyles();

  return (
    <button
      className="rounded-lg px-8 py-2 shadow hover:bg-blue-800 hover:text-white"
      style={styles}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  layoutType: PropTypes.oneOf(["A", "B"]).isRequired,
};

export default Button;
