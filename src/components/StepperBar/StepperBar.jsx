import React from "react";
import "./StepperBar.styles.scss";

const StepperBar = ({ step }) => {
  return (
    <div id="progress">
      <div id="progress-bar">{step}</div>
      <ul id="progress-num">
        <li class="step active">1</li>
        <li class="step">2</li>
        <li class="step">3</li>
      </ul>
    </div>
  );
};

export default StepperBar;
