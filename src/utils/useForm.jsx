import { useState } from "react";
import { omit } from "lodash";

const useForm = (submitHandler) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    switch (name) {
      case "password": {
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;
      }
      case "passwordConfirmation": {
        if (values["password "] !== value) {
          setErrors({
            ...errors,
            passwordConfirmation:
              "Password Confirmation doesn't match Password",
          });
        } else {
          let newObj = omit(errors, "passwordConfirmation");
          setErrors(newObj);
        }
      }
      /* falls through */
      default: {
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      submitHandler();
    } else {
      return;
    }
  };

  //A handler to form inputs
  const handleChange = (event) => {
    //Stops default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
