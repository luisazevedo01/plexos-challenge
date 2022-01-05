import { Form, Formik } from "formik";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import StepperPopup from "../../components/StepperPopup/StepperPopup";
import { submitForm } from "../../services/api";
import "./PasswordManager.styles.scss";

export default function PasswordManager() {
  const [generatorVisibility, setGeneratorVisibility] = useState(false);

  const handleGenerator = () => {
    setGeneratorVisibility((generatorVisibility) => !generatorVisibility);
  };

  return (
    <div className="password-manager_wrapper">
      <Header handleGenerator={handleGenerator} />
      {generatorVisibility && (
        <StepperPopup
          show={generatorVisibility}
          onClose={setGeneratorVisibility}
        >
          <ProductInformation />
          <PasswordForm />
          <h1>log3</h1>
        </StepperPopup>
      )}
    </div>
  );
}

const ProductInformation = () => {
  return (
    <div>
      <h1>Create your password</h1>
      <h4>How does it works</h4>
      <p>
        First of all you have to create your password. Save it well, you will
        not be able to recover it.
      </p>
      <h4>Which data can you save</h4>
      <p>For example, your card number...</p>
    </div>
  );
};

const PasswordForm = () => {
  return (
    <Formik
      initialValues={{ pass: "" }}
      onSubmit={async (pass) => await submitForm(pass)}
    >
      <Form autoComplete="off">
        <h2>PAss</h2>
        <p>First of all...</p>
        <label title="Password " />
        <input value="" placeholder="password" />
        <label title="Password confimation" />
        <input value="" placeholder="password confirmation" />
        <p>You also can...</p>
        <label title="Helper quote (optional)" />
        <input placeholder="helper" />
      </Form>
    </Formik>
  );
};
