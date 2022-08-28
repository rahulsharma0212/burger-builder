import React from "react";
import classes from "./BurgerIngredient.css";
import PropTypes from "prop-types";

const Burgeringridient = (props) => {
  let ingridient = null;
  switch (props.type) {
    case "bread-bottom":
      ingridient = <div className={classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingridient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingridient = <div className={classes.Meat}></div>;
      break;
    case "cheese":
      ingridient = <div className={classes.Cheese}></div>;
      break;
    case "salad":
      ingridient = <div className={classes.Salad}></div>;
      break;
    case "bacon":
      ingridient = <div className={classes.Bacon}></div>;
      break;
    default:
      ingridient = null;
      break;
  }
  return ingridient;
};

Burgeringridient.propType = {
  type: PropTypes.string.isRequired,
};

export default Burgeringridient;
