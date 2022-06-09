import React, { useEffect, useState } from "react";

import './CountdownTimer.css';

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(50);
  const [hours, setHours] = useState(3);
  const [days, setDays] = useState(3);
  const [seconds, setSeconds] = useState(54);
  const [timer, setTimer] = useState([
    { id: 1, classNames: 'time-left', wrapperClassName: 'time-top', desc: 'days' },
    { id: 2, classNames: 'time-left', wrapperClassName: 'time-top', desc: 'hours' },
    { id: 3, classNames: 'time-left', wrapperClassName: 'time-top', desc: 'minutes' },
    { id: 4, classNames: 'time-left fold always ', wrapperClassName: 'time-top flip always ', desc: 'seconds' },
  ]);

  const endTime = new Date('2022-07-01 00:00:00').getTime();

  // setInterval(() => {
  //   const nowTime = new Date().getTime();
  //   // const time = Math.floor((endTime - nowTime) / 1000);
  //   // const time = endTime - nowTime;
  //   let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
  //   days = days < 10 ? `0${days}` : days;

  //   let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
  //   // Przykład - dodanie 0 przeg godziną 
  //   hours = hours < 10 ? `0${hours}` : hours;

  //   let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
  //   minutes = minutes < 10 ? `0${minutes}` : minutes;

  //   let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);


  //   // console.log(days, hours, minutes)

  //   let timing = [days, hours, minutes]

  //   //setTimer(timing)
  //   setDays(days);
  //   setHours(hours);
  //   setMinutes(minutes);
  //   setSeconds(seconds)

  // }, 1000);

  const startCountDown = () => {
   
    let days = 20;
    let hours = 30;
    let min = 40;
    let sec = 20;
    console.log("========let min ========", min);
    let temp = [...timer];

    setInterval(() => {
      sec = sec - 1;
      if (sec === 0) {
          temp[2].classNames = 'time-left fold'
          temp[2].wrapperClassName = 'time-top flip'
          setTimeout(() => {
              min = min - 1;
          }, 900);
          sec = 59
      }
      if (min === 0) {
        temp[2].classNames = 'time-left fold'
        temp[2].wrapperClassName = 'time-top flip'
        setTimeout(() => {
          hours = hours - 1;
        }, 900);
        min = 59
      }
      if (hours === 0) {
        temp[1].classNames = 'time-left fold'
        temp[1].wrapperClassName = 'time-top flip'
        setTimeout(() => {
          days = days - 1;
        }, 900);
        hours = 23
      }
      setSeconds(sec);
      setTimer(temp);
      setMinutes(min);
      setHours(hours);
      setDays(days);
      //setSeconds(sec);

      resetClassNames();
    }, 1000);
}

const resetClassNames = () => {
    let temp = [...timer];
    for (let i = 0; i < temp.length; i++) {
        if (i === 2)
            continue
        const element = temp[i];
        element.classNames = 'time-left';
        element.wrapperClassName = 'time-top'
    }
}

useEffect(() => {
  startCountDown();
}, [])



  return (
    <div className="countdownSection">
      <h1>To release day:</h1>
      <div className="timer-wrap">
      {timer.map(({ id, classNames, wrapperClassName, desc, }, index) => {
        return (
          <div key={id} className={desc}>
            <div className="time" >
              <span className={classNames} >
                {index === 3 ? seconds : index === 2 ? minutes : index === 1 ? hours : days}
              </span>
              <div className="half-circle-left"></div>
              <div className={wrapperClassName}></div>
              <div className="fake-time-top"></div>
              <div className="time-bottom"></div>
              <div className="half-circle-right"></div>
            </div>
            <p className="desc">{desc}</p>
          </div>
        )
      })}


        {/* <div className={classes.piece}>
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
        </div> */}

      </div>
    </div>
  )
};

export default CountdownTimer;