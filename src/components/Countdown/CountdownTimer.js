import classes from "./CountdownTimer.module.css";

const CountdownTimer = () => {

  const endTime = new Date('2022-07-01 00:00:00').getTime();

  setInterval(() => {
    const nowTime = new Date().getTime();
    // const time = Math.floor((endTime - nowTime) / 1000);
    const time = endTime - nowTime;
    let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));

    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    // Przykład - dodanie 0 przeg godziną 
    hours = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);

    // console.log(days, hours, minutes)

  }, 60000);

  return (
    <div className={classes.countdownSection}>
      <h1>To release day:</h1>
      <div>
        {/* <div>{days}</div> */}
        <div>days</div>
      </div>
      <div>
        {/* <div>{hours}</div> */}
        <div>hours</div>
      </div>
      <div>
        {/* <div>{minutes}</div> */}
        <div>minutes</div>
      </div>
      <div>
        UTC + 2
      </div>
    </div>
  )
};

export default CountdownTimer;