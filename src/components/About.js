import Form from "./Form/Form";

import classes from "./About.module.css";
import imgDate from "../img/data2_axiom_1000-200.svg";

const About = () => {
  return (
    <div className={classes.aboutCard}>
      <Form/>
      <div className={classes.aboutSection}>
        <div className={classes.description}>
          <p>
            AxiomOS is a mobile operating system focused on minimalism, privacy
            and security based on the Android Open Source Project. It was created
            not to compete with other versions of custom roms, but only to fill
            the gap for those who value minimalism and privacy.
          </p>
          <p className={classes.description}>
            AxiomOS is made by developers, not just rom builders. Most of us work
            as a Java developer or QA specialist in our daily life. We create a
            system that we would like to use ourselves, having in mind something
            that is most important to us - Android is a system for phones and the
            phone is to be useful and effective, taking care of our privacy.
          </p>
        </div>
        <div className={classes.image}>
          <img src={imgDate} alt="AxiomOS launch date" />
        </div>
      </div>
    </div>
  );
};

export default About;
