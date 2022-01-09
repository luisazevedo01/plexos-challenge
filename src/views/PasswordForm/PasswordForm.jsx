import React from "react";
import useForm from "../../utils/useForm";
import "./PasswordForm.styles.scss";

const PasswordForm = ({ submitForm }) => {
  const submitHandler = () => {
    submitForm(values.password);
  };
  const { handleChange, values, errors, handleSubmit } = useForm(submitHandler);

  return (
    <form className="password-form" id="password-form" onSubmit={handleSubmit}>
      <h1>Create your Password Manager</h1>
      <p>
        First, you must create a different password for your electronic
        belongings. You will not be able to recover your password, so remember
        it well.
      </p>
      <section className="password-section">
        <div className="form-field">
          <label>Create your Master Password</label>
          <input
            className="input"
            minLength="6"
            required
            type="password"
            name="password"
            placeholder="Your Password"
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div className="form-field">
          <label>Repeat your Master Password</label>
          <input
            className="input"
            required
            type="password"
            name="passwordConfirmation"
            placeholder="Repeat your Password"
            onChange={handleChange}
          />
          {errors.passwordConfirmation && <p>{errors.passwordConfirmation}</p>}
        </div>
      </section>
      <p>You can also create a helper to remmember your password.</p>
      <div className="form-field">
        <label>Create your helper to remind you (optional)</label>
        <input
          className="input"
          type="text"
          name="helper"
          placeholder="Introduce your helper"
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default PasswordForm;
