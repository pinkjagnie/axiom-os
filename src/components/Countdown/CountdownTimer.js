import React, { useState } from "react";

import classes from "./CountdownTimer.module.css";

const CountdownTimer = () => {
  const [timer, setTimer] = useState([]);

  const endTime = new Date('2022-07-01 00:00:00').getTime();

  setInterval(() => {
    const nowTime = new Date().getTime();
    // const time = Math.floor((endTime - nowTime) / 1000);
    // const time = endTime - nowTime;
    let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
    days = days < 10 ? `0${days}` : days;

    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    // Przykład - dodanie 0 przeg godziną 
    hours = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    // console.log(days, hours, minutes)

    let timing = [days, hours, minutes]

    setTimer(timing)

  }, 1000);

  return (
    <div className="countdownSection">
      <h1>To release day:</h1>
      <div className={classes.container}>
        <div className={classes.piece}>
          <div>{timer[0]}</div>
          <div>days</div>
        </div>
        <div className={classes.piece}>
          <div>{timer[1]}</div>
          <div>hours</div>
        </div>
        <div className={classes.piece}>
          <div>{timer[2]}</div>
          <div>minutes</div>
        </div>
        <div className={classes.piece}>
          UTC + 2
        </div>
      </div>
    </div>
  )
};

export default CountdownTimer;