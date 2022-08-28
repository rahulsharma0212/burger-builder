import React from "react";
import classes from "./Burger.css";
import BurgerIngridient from "./Burgeringridient/BurgerIngridient";

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      <BurgerIngridient type="salad" />
      <BurgerIngridient type="cheese" />
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default Burger;
