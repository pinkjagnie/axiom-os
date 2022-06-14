import React from "react";

import classes from "./Features.module.css";

import securityImg from '../img/security_300-300.png';
import privacyImg from '../img/privacy_300-300.png';
import uiImg from '../img/ui_300-300.png';

const Features = () => {
  return(
    <div className={classes.featuresSection}>
      <div className={classes.cardsContainer}>
        <h1>Get to know new AxiomOS</h1>
        <div className={classes.cardFeatures}>
          <div className={classes.cardContent}>
            <img src={securityImg} alt="" />
            <h2 className={classes.cardTitle}>security</h2>
            <p className={classes.cardDescription}>We ensure the security of your data thanks to regular security updates from Google and a hardened patches in the system and kernel sources.</p>
          </div>
          <div className={classes.cardContent}>
            <img src={privacyImg} alt="" />
            <h2 className={classes.cardTitle}>privacy</h2>
            <p className={classes.cardDescription}>To increase the privacy of your data. We block some trackers and advertising systems by default to avoid tracking marketing. In addition, we introduce our own solutions to improve privacy.</p>
          </div>
          <div className={classes.cardContent}>
            <img src={uiImg} alt="" />
            <h2 className={classes.cardTitle}>ui / ux</h2>
            <p className={classes.cardDescription}>Speed and usability are the basis for us. However, we do not forget about the beautiful appearance. Taking into account minimalism, we are introducing a few improvements in the appearance.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Features;