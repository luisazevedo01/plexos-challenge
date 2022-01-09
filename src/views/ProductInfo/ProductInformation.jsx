import React from "react";
import gearHead from "../../assets/img/gear_head.svg";
import lockedVault from "../../assets/img/locked_vault.svg";
import "./ProductInformation.styles.scss";

const ProductInformation = () => {
  return (
    <div className="product-information">
      <h1>Create your password</h1>
      <section className="illustrated-explanation">
        <img src={gearHead} alt="Gear Head" />
        <img src={lockedVault} alt="Gear Head" />
      </section>
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

export default ProductInformation;
