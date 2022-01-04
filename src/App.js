import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import ProductInformation from "./views/ProductInformation/ProductInformation";
import PasswordManager from "./views/PasswordManager/PasswordManager";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductInformation />} />
        <Route path="/password-manager" element={<PasswordManager />} />
      </Routes>
    </Router>
  );
}
