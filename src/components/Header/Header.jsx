import React from "react";
import "./Header.styles.scss";

const Header = (props) => {
  const openGenerator = () => {
    props.handleGenerator();
  };

  return (
    <section className="header">
      <button onClick={() => (window.location.href = "/")}>Back</button>
      <button onClick={openGenerator}>Generate Password</button>
    </section>
  );
};

export default Header;
