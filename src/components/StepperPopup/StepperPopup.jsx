import React, { useEffect, useState } from "react";
import StepperBar from "../StepperBar/StepperBar";
import "./StepperPopup.styles.scss";
import { IoIosArrowForward } from "react-icons/io";

const StepperPopup = ({ isLoading, ...props }) => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(props.step || 0);
  const childrenArr = [...props.children];

  const isLastStep = () => {
    return step === childrenArr.length - 1;
  };

  const closeHandler = () => {
    props.onClose();
  };

  const handleStep = () => {
    setStep((currStep) =>
      currStep < childrenArr.length ? currStep + 1 : currStep
    );
    if (props.handleStep) {
      props.handleStep();
    }
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  useEffect(() => {
    if (props.step === 2 && isLoading === false) setStep((curr) => curr + 1);
  }, [props.step, isLoading]);

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
          <StepperBar step={step + 1} steps={childrenArr} />
        </section>
        <section className="popup-content"> {childrenArr[step]}</section>
        <section className="popup-footer">
          {isLastStep() ? (
            <LastFooter closeHandler={closeHandler} />
          ) : (
            <DefaultFooter
              handleStep={handleStep}
              step={step}
              isLoading={isLoading}
              closeHandler={closeHandler}
            />
          )}
        </section>
      </div>
    </div>
  );
};

const DefaultFooter = (props) => {
  return (
    <>
      <button className="secondary-button" onClick={props.closeHandler}>
        Cancel
      </button>
      {props.step === 1 && (
        <button className="primary-button" form="password-form" type="submit">
          {props.isLoading ? "Loading..." : "Next >"}
        </button>
      )}
      {props.step !== 1 && (
        <button className="primary-button" onClick={() => props.handleStep()}>
          <span>Next</span>
          <IoIosArrowForward size="0.9rem" style={{ paddingLeft: "5px" }} />
        </button>
      )}
    </>
  );
};

const LastFooter = ({ closeHandler }) => {
  return (
    <>
      <button onClick={closeHandler}>Go back to PasswordManager</button>
    </>
  );
};

export default StepperPopup;
