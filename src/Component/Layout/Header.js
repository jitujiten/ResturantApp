import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton/>
      </header>
     <div className={classes['main-image']}>
      <img src={mealsImage}/>
      </div>
    </React.Fragment>
  );
};

export default Header;
