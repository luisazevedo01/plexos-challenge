import React from "react";
import { useTranslation } from "react-i18next";
import FlagPicker from "../FlagPicker/FlagPicker";
import "./Header.styles.scss";

const Header = (props) => {
  const { t } = useTranslation();

  const openGenerator = () => {
    props.handleGenerator();
  };

  return (
    <section className="header">
      <button onClick={() => (window.location.href = "/")}>
        {t("header.back")}
      </button>
      <FlagPicker />
      <button onClick={openGenerator}>{t("header.passGenerator")}</button>
    </section>
  );
};

export default React.memo(Header);
