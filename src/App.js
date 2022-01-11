import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import PasswordManager from "./views/PasswordManager/PasswordManager";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary/FallBackErrorBoundary";
import ChallengeInformation from "./views/ChallengeInformation/ChallengeInformation";
import { I18nextProvider, useTranslation } from "react-i18next";

export default function App() {
  const { i18n } = useTranslation();

  const errorHanldler = (error, errorInfo) => {
    console.log("Error", error, errorInfo);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHanldler}>
        <Router>
          <Routes>
            <Route path="/" element={<ChallengeInformation />} />
            <Route path="/password-manager" element={<PasswordManager />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </I18nextProvider>
  );
}
