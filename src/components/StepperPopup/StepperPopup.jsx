import React, { useEffect, useState } from "react";
import StepperBar from "../StepperBar/StepperBar";
import "./StepperPopup.styles.scss";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

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
        <section className="popup_header">
          <StepperBar step={step + 1} steps={childrenArr} />
        </section>
        <section className="popup_content"> {childrenArr[step]}</section>
        {isLastStep() ? (
          <LastFooter
            closeHandler={closeHandler}
            submitResult={props.submitResult}
          />
        ) : (
          <DefaultFooter
            handleStep={handleStep}
            step={step}
            isLoading={isLoading}
            closeHandler={closeHandler}
          />
        )}
      </div>
    </div>
  );
};

const DefaultFooter = (props) => {
  const { t } = useTranslation();

  return (
    <section className="popup_footer">
      <button className="secondary-button" onClick={props.closeHandler}>
        {t("popupFooter.cancel")}
      </button>
      {props.step === 1 && (
        <button
          className="primary-button"
          form="password-form"
          type="submit"
          disabled={props.isLoading}
        >
          {props.isLoading ? (
            <svg className="spinner" viewBox="0 0 50 50">
              <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="5"
              ></circle>
            </svg>
          ) : (
            <>
              <span>{t("popupFooter.next")}</span>
              <IoIosArrowForward size="0.9rem" style={{ paddingLeft: "5px" }} />
            </>
          )}
        </button>
      )}
      {props.step !== 1 && (
        <button className="primary-button" onClick={() => props.handleStep()}>
          <span>{t("popupFooter.next")}</span>
          <IoIosArrowForward size="0.9rem" style={{ paddingLeft: "5px" }} />
        </button>
      )}
    </section>
  );
};

const LastFooter = ({ closeHandler, submitResult }) => {
  return (
    <section className="popup_last-footer">
      <button className="terciary-button" onClick={closeHandler}>
        <span>
          {submitResult === "error" ? "Go back to PasswordManager" : "Access"}
        </span>
        <IoIosArrowForward size="0.9rem" style={{ paddingLeft: "5px" }} />
      </button>
    </section>
  );
};

export default StepperPopup;
