import React ,{Component}from "react";
import Auxillary from "../Auxillary/Auxillary";
import Toolbar from "../../components/Navigation/SideDrawer/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.css";

class Layout extends Component {
  state ={
    showSideDrawer:false
  }
  sideDrawerCloseHandler =()=>{
    this.setState({showSideDrawer:false});
  }
  sideDrawerToggleHandle=()=>{
    this.setState((prevState)=>{
      return {showSideDrawer:!prevState.showSideDrawer};
    });
  }
  render() {
   return (
    <Auxillary>
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandle}/>
      <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
      <main className={classes.Content}>{this.props.children}</main>
    </Auxillary>
  )
  }
}


export default Layout;
