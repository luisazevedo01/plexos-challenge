import React from "react";
import "./StepperBar.styles.scss";

const StepperBar = ({ step, steps }) => {
  return (
    <div id="progress">
      <ul id="progress-num">
        <div
          style={{ width: ((step - 1) / (steps.length - 1)) * 100 - 4 + "%" }}
          className="progress-bar"
        ></div>
        {steps.map((el, index) => {
          return (
            <li
              className={
                step >= index + 1
                  ? step > index + 1
                    ? "step done"
                    : "step active"
                  : "step"
              }
              key={index}
            >
              {step > index + 1 ? "✔" : index + 1}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepperBar;
