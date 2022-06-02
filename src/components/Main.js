import FormTop from "./Form/FormTop";

import classes from "./Main.module.css";

import phonesImg from "../img/phones_400-300.jpg";
import liDot from "../img/ul_style_160-160.jpg";

const Main = () => {
  return (
    <>
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
      <div className={classes.formTopSection}>
        <FormTop />
      </div>
    </>
  );
};

export default Main;
