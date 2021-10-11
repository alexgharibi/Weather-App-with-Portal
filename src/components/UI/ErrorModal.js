import React from "react";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ErrorOverlay = (props) => {
  return (
    <div className={classes["error-modal"]}>
      <h2>An Error Occurred!</h2>
      <p>{props.children}</p>
      <div className={classes["error-modal__actions"]}>
        <button type="button" className={classes.btn} onClick={props.onClose}>
          Okay
        </button>
      </div>
    </div>
  );
};

const PortalErrorElement = document.getElementById("error");

const ErrorModal = React.memo((props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        PortalErrorElement
      )}
      {ReactDOM.createPortal(
        <ErrorOverlay children={props.children} onClose={props.onClose} />,
        PortalErrorElement
      )}
    </React.Fragment>
  );
});

export default ErrorModal;
