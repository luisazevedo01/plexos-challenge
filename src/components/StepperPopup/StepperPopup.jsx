import React, { useEffect, useState } from "react";
import StepperBar from "../StepperBar/StepperBar";
import "./StepperPopup.styles.scss";

const StepperPopup = (props) => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0);
  const childrenArr = [...props.children];

  const isLastStep = () => {
    return step === childrenArr.length - 1;
  };

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className="overlay"
    >
      <div className="popup">
        <section className="popup-header">
          <StepperBar step={step + 1} />
        </section>
        <section className="popup-content"> {childrenArr[step]}</section>
        <section className="popup-footer">
          <button onClick={closeHandler}>Cancel</button>
          <button
            onClick={() =>
              isLastStep()
                ? alert("Submiting...")
                : setStep((currStep) => currStep + 1)
            }
          >
            {isLastStep() ? "Submit" : "Next"}
          </button>
        </section>
      </div>
    </div>
  );
};

export default StepperPopup;
