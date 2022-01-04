import React, { useEffect, useState } from "react";
import popupStyles from "./CustomPopup.styles.scss";

const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className="overlay"
    >
      <div className="popup">
        <section className="popup-header">1 2 3</section>
        <section className="popup-content"> {props.children}</section>
        <section className="popup-footer">
          <button onClick={closeHandler}>Cancel</button>
          <button>Next</button>
        </section>
      </div>
    </div>
  );
};

export default CustomPopup;
