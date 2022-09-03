import React from "react";
import classes from "./Modal.css";
import Auxillary from "../../../hoc/Auxillary/Auxillary";
import BackDrop from '../Backdrop/Backdrop'

class Modal extends React.Component {
  shouldComponentUpdate(nextProps,nextstate) {
    return nextProps.show !== this.props.show;
  }
  componentWillUpdate(){
  console.log("[modal.js] will update");
  }

  render() {
    return (
  <Auxillary>
    <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
    <div
      className={classes.Modal}
      style={{ transform: this.props.show ? "translateY(0)" : "translateY(-100vh)" }}
    >
      {this.props.children}
    </div>
  </Auxillary>
)
  }
}

export default Modal;
