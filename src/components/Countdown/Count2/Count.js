import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';

const Count = () => {
  return (
      <div>
          <h1>Large:</h1>
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
            endAt={'2022-07-01 00:00:00'}
          />
         
          <h1>Medium:</h1>
          <FlipCountdown
            hideYear
            hideMonth
            dayTitle='days'
            hourTitle='hours'
            minuteTitle='minutes'
            secondTitle='seconds'
            titlePosition='bottom'
            theme='dark'
            size='medium'
            endAt={'2022-07-01 00:00:00'}
          />
         
          
      </div>
  );
};

export default Count;