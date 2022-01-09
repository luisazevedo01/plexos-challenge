import React, { Fragment } from "react";

export default function FeedBack({ type, ...props }) {
  return (
    <Fragment>{type === "success" ? <SuccessView /> : <ErrorView />}</Fragment>
  );
}

const SuccessView = (props) => {
  return (
    <Fragment>
      <h3>Your password has been created</h3>
      <p>Lorem ipsum dolor sit amet...</p>
    </Fragment>
  );
};

const ErrorView = () => {
  return (
    <Fragment>
      <h3>An error occurred</h3>
      <p>Occurred an error while creating your password. Try again later.</p>
    </Fragment>
  );
};
