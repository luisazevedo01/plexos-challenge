import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LANGUAGES from "../Translator/languages";
import "./FlagPicker.styles.scss";

const FlagPicker = () => {
  const { i18n } = useTranslation();

  const getFlags = () => {
    return Object.keys(LANGUAGES).sort((a) => (a === i18n.language ? -1 : 1));
  };

  const [sortedFlags] = useState(getFlags);

  const handleFlag = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select className="flag-picker" onChange={handleFlag}>
      {sortedFlags.map((lng, index) => (
        <option key={index} value={lng}>
          {LANGUAGES[lng].flag}
        </option>
      ))}
    </select>
  );
};

export default React.memo(FlagPicker);
