import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../Ui/Backdrop/Backdrop";
import Auxillary from "../../../hoc/Auxillary/Auxillary";
import classes from "./SideDrawer.css";

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open]
    }
  return (
    <Auxillary>
        <BackDrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxillary>
  );
};

export default SideDrawer;
