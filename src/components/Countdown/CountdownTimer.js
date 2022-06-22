import React from 'react';

import FlipCountdown from '@rumess/react-flip-countdown';

import classes from './CountdownTimer.module.css';

const CountdownTimer = () => {
  return (
    <div className={classes.countdownSection}>
      <h1>To release day:</h1>
      <p>(UTC + 2)</p>
      <FlipCountdown
        hideYear
        hideMonth
        dayTitle='days'
        hourTitle='hours'
        minuteTitle='minutes'
        secondTitle='seconds'
        titlePosition='bottom'
        theme='dark'
        size='large'
        endAt={'2022-07-15 00:00:00'}
      />
    </div>
  );
};

export default CountdownTimer;