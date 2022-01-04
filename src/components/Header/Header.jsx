import React, { useState } from "react";
import "./Header.styles.scss";

const Header = (props) => {
  const openGenerator = () => {
    props.handleGenerator();
  };

  return (
    <div className="header">
      <button onClick={() => (window.location.href = "/")}>Back</button>
      <button onClick={openGenerator}>Generate Password</button>
    </div>
  );
};

export default Header;
