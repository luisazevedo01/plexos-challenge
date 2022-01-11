import React, { lazy, Suspense, useState } from "react";
import Header from "../../components/Header/Header";
//import StepperPopup from "../../components/StepperPopup/StepperPopup";
import PasswordForm from "../PasswordForm/PasswordForm";
import "./PasswordManager.styles.scss";
import { submitForm } from "../../services/api";
import FeedBack from "../Feedback/FeedBack";
import ProductInformation from "../ProductInfo/ProductInformation";
import Loader from "../../components/Loader/Loader";

const StepperPopup = lazy(() =>
  import("../../components/StepperPopup/StepperPopup")
);

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
    setSubmitResult("error");
  };

  return (
    <div className="password-manager_wrapper">
      <Header handleGenerator={handleGenerator} />
      {generatorVisibility && (
        <Suspense fallback={<Loader />}>
          <StepperPopup
            show={generatorVisibility}
            onClose={onPopupClose}
            isLoading={isLoading}
            step={popupStep}
            submitResult={submitResult}
          >
            <ProductInformation />
            <PasswordForm submitForm={submitPasswordForm} />
            <FeedBack type={submitResult} />
          </StepperPopup>
        </Suspense>
      )}
    </div>
  );
}
