import React from "react";
import { useTranslation } from "react-i18next";
import gearHead from "../../assets/img/gear_head.svg";
import lockedVault from "../../assets/img/locked_vault.svg";
import "./ProductInformation.styles.scss";

const ProductInformation = () => {
  const { t } = useTranslation();

  return (
    <div className="product-information">
      <h1>{t("passwordManager.productInfo.title")}</h1>
      <section className="illustrated-explanation">
        <div className="product-information_card">
          <img src={gearHead} alt="Gear Head" />
          <p>{t("passwordManager.productInfo.gearHeadCaption")}</p>
        </div>
        <div className="product-information_card">
          <img src={lockedVault} alt="Locked Vault" />
          <p>{t("passwordManager.productInfo.lockedVault")}</p>
        </div>
      </section>
      <section>
        <h3>{t("passwordManager.productInfo.explanation.firstTitle")}</h3>
        <p>{t("passwordManager.productInfo.explanation.firstDescription")} </p>
        <h3>{t("passwordManager.productInfo.explanation.secondTitle")}</h3>
        <p>{t("passwordManager.productInfo.explanation.secondDescription")} </p>
      </section>
    </div>
  );
};

export default ProductInformation;
