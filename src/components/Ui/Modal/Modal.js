import React from "react";
import classes from "./Modal.css";
import Auxillary from "../../../hoc/Auxillary";
import BackDrop from '../Backdrop/Backdrop'

const Modal = (props) => (
  <Auxillary>
    <BackDrop show={props.show} clicked={props.modalClosed}/>
    <div
      className={classes.Modal}
      style={{ transform: props.show ? "translateY(0)" : "translateY(-100vh)" }}
    >
      {props.children}
    </div>
  </Auxillary>
);

export default Modal;
