import React, { Fragment, useCallback, useMemo, useState } from "react";
import CustomPopup from "../../components/CustomPopup/CustomPopup";
import Header from "../../components/Header/Header";
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
        <CustomPopup
          show={generatorVisibility}
          onClose={setGeneratorVisibility}
        >
          <PopupContent />
        </CustomPopup>
      )}
    </div>
  );
}

const PopupContent = () => {
  return (
    <div>
      <h1>Create your password</h1>
      <h4>How does it works</h4>
      <p>
        First of all you have to create your password. Save it well, you will
        not be able to recover it.
      </p>
    </div>
  );
};
