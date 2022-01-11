import React from "react";

const Loader = () => {
  return (
    <svg className="loader" viewBox="0 0 50 50">
      <circle
        className="loader_path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </svg>
  );
};

export default Loader;