import React from "react";

import FormTop from "./Form/FormTop";

import classes from "./Main.module.css";

import phonesImg from "../img/phones_400-300.svg";
import liDot from "../img/ul_style2_160-160.svg";

const Main = () => {
  return (
    <div className={classes.mainCard}>
      <div className={classes.main}>
        <div className={classes.image}>
          <img src={phonesImg} alt="Snapshots of AxiomOs" />
        </div>
        <div className={classes.slogan}>
          <h1>Level up your operating system!</h1>
          <div className={classes.points}>
            <img src={liDot} alt="" />
            <p>minimalism</p>

            <img src={liDot} alt="" />
            <p>privacy</p>

            <img src={liDot} alt="" />
            <p>security</p>

            <img src={liDot} alt="" />
            <p>based on the Android Open Source Project</p>
          </div>
        </div>
      </div>
      <FormTop />
    </div>
  );
};

export default Main;
