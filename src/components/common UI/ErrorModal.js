import React from "react";
import ReactDom from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onButtonClicked} />
}

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>
          {props.title}
        </h2>
      </header>
      <div className={classes.content}>
        <p>
          {props.message}
        </p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onButtonClicked}>{props.buttonKey}</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {
        ReactDom.createPortal(
          <Backdrop
            onButtonClicked={props.onButtonClicked}
          />,
          document.getElementById('backdrop-root')
        )
      }
      {
        ReactDom.createPortal(
          <ModalOverlay
            onButtonClicked={props.onButtonClicked}
            title={props.title}
            message={props.message}
            buttonKey={props.buttonKey}
          />,
          document.getElementById('modal-root')
        )
      }
    </React.Fragment>
  )
}

export default ErrorModal