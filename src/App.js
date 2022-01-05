import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProductInformation from "./views/ProductInformation/ProductInformation";
import PasswordManager from "./views/PasswordManager/PasswordManager";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary/FallBackErrorBoundary";

export default function App() {
  const errorHanldler = (error, errorInfo) => {
    console.log("Error", error, errorInfo);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHanldler}>
      <Router>
        <Routes>
          <Route path="/" element={<ProductInformation />} />
          <Route path="/password-manager" element={<PasswordManager />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
