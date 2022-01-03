import React, { Component, Fragment } from "react";
import "./App.scss";
import ProductInformation from "./views/ProductInformation/ProductInformation";

function App() {
  const handleChallenge = () => {
    console.log("Started!");
  };

  return (
    <Fragment>
      <button className="challenge" onClick={handleChallenge}>
        Challenge
      </button>
      <ProductInformation />
    </Fragment>
  );
}

export default App;
