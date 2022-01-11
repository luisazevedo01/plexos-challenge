import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import "./PasswordInput.styles.scss";

const PasswordInput = (props) => {
  const [showPassword, setShow] = useState(false);

  return (
    <div className="pass-input_wrapper">
      <input {...props} type={showPassword ? "text" : "password"} />
      {showPassword ? (
        <AiOutlineEyeInvisible
          size="30px"
          color="gray"
          onClick={() => setShow(false)}
        />
      ) : (
        <AiOutlineEye size="30px" color="gray" onClick={() => setShow(true)} />
      )}
    </div>
  );
};

export default PasswordInput;
