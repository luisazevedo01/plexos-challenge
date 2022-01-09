import React, { useState } from "react";
import Header from "../../components/Header/Header";
import StepperPopup from "../../components/StepperPopup/StepperPopup";
import PasswordForm from "../PasswordForm/PasswordForm";
import "./PasswordManager.styles.scss";
import { submitForm } from "../../services/api";
import FeedBack from "../Feedback/FeedBack";
import ProductInformation from "../ProductInfo/ProductInformation";
//const FeedBack = React.lazy(() => import("../Feedback/FeedBack"));

export default function PasswordManager() {
  const [generatorVisibility, setGeneratorVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [popupStep, setPopupStep] = useState(0);
  const [submitResult, setSubmitResult] = useState("error");

  const handleGenerator = () => {
    setGeneratorVisibility((generatorVisibility) => !generatorVisibility);
  };

  const submitPasswordForm = (pass) => {
    setIsLoading(true);
    submitForm(pass)
      .then((r) => {
        setSubmitResult(r.ok ?? "success");
      })
      .catch(() => {
        setSubmitResult("error");
      })
      .finally(() => {
        setIsLoading(false);
        setPopupStep(2);
      });
  };

  const onPopupClose = () => {
    setGeneratorVisibility(false);
    setPopupStep(0);
  };

  return (
    <div className="password-manager_wrapper">
      <Header handleGenerator={handleGenerator} />
      {generatorVisibility && (
        <StepperPopup
          show={generatorVisibility}
          onClose={onPopupClose}
          isLoading={isLoading}
          step={popupStep}
        >
          <ProductInformation />
          <PasswordForm submitForm={submitPasswordForm} />
          <FeedBack type={submitResult} />
        </StepperPopup>
      )}
    </div>
  );
}
