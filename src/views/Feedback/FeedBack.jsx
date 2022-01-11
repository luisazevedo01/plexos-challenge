import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { BiError } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import "./FeedBack.styles.scss";

const FeedBack = ({ type }) => {
  return (
    <Fragment>{type === "success" ? <SuccessView /> : <ErrorView />}</Fragment>
  );
};

const SuccessView = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="feedback-title">
        <FiCheckCircle color="green" size="35px" />
        <h2>{t("successFeedback.title")}</h2>
      </div>
      <p className="feedback-description">{t("successFeedback.description")}</p>
    </Fragment>
  );
};

const ErrorView = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="feedback-title">
        <BiError color="red" size="35px" />
        <h2>{t("errorFeedback.title")}</h2>
      </div>
      <p className="feedback-description">{t("errorFeedback.description")}</p>
    </Fragment>
  );
};

export default React.memo(FeedBack);
