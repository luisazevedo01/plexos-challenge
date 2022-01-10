import React from "react";
import { useTranslation } from "react-i18next";
import useForm from "../../utils/useForm";
import "./PasswordForm.styles.scss";

const PasswordForm = ({ submitForm }) => {
  const { t } = useTranslation();
  const submitHandler = () => {
    submitForm(values.password);
  };
  const { handleChange, values, errors, handleSubmit } = useForm(submitHandler);

  return (
    <form className="password-form" id="password-form" onSubmit={handleSubmit}>
      <h1>{t("passwordManager.passwordForm.title")}</h1>
      <p>{t("passwordManager.passwordForm.firstOfAll")}</p>
      <section className="password-section">
        <div
          className="form-field"
          style={{ width: "230px", marginRight: "15px" }}
        >
          <label>{t("passwordManager.passwordForm.passLabel")}</label>
          <input
            minLength="6"
            required
            type="password"
            name="password"
            placeholder={t("passwordManager.passwordForm.passPlaceholder")}
            onChange={handleChange}
          />
          {values.password && errors.password && (
            <p className="form-error">{errors.password}</p>
          )}
        </div>
        <div className="form-field" style={{ width: "230px" }}>
          <label>{t("passwordManager.passwordForm.repPassLabel")}</label>
          <input
            minLength="6"
            required
            type="password"
            name="passwordConfirmation"
            placeholder={t("passwordManager.passwordForm.repPassPlaceholder")}
            onChange={handleChange}
          />
          {values.passwordConfirmation && errors.passwordConfirmation && (
            <p className="form-error">{errors.passwordConfirmation}</p>
          )}
        </div>
      </section>
      <p>{t("passwordManager.passwordForm.helperDescription")}</p>
      <div className="form-field">
        <label>{t("passwordManager.passwordForm.helperLabel")}</label>
        <input
          type="text"
          maxLength="255"
          name="helper"
          placeholder={t("passwordManager.passwordForm.helperPlaceholder")}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default PasswordForm;
