import "./Countdown.scss";
import React, { useEffect, useState } from "react";

const CountDown = ({ target }) => {
  const countDownDate = new Date(target).getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) +
        days * 24;
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // If the count down is over, write some text
      if (distance < 0) {
        // clearInterval(countdown);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
  });
  return (
    <div className="w-full flex flex-col justify-center items-center countdown-container">
      <p className="countdown-title">coming soon</p>
      <section>
        <ul>
          <li>
            <span className="hours time-numbers">
              {hours >= 10 ? hours : `0${hours}`}
            </span>
            <p className="timeRefHours time-description">hours</p>
          </li>
          <li>
            <span className="minutes time-numbers">
              {" "}
              {minutes >= 10 ? minutes : `0${minutes}`}
            </span>
            <p className="timeRefMinutes time-description">minutes</p>
          </li>
          <li>
            <span className="seconds time-numbers yellow-text">
              {seconds >= 10 ? seconds : `0${seconds}`}
            </span>
            <p className="timeRefSeconds time-description">seconds</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CountDown;
