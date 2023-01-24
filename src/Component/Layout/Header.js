import React from "react";
import classes from "./Header.module.css";
import mealsimage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onClick={props.onpress} />
      </header>
     <div className={classes['main-image']}>
     <img src={mealsimage} alt="table of delicious foods"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
