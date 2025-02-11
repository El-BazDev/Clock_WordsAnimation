import moment from 'moment-timezone';
import React, { useEffect, useRef, useCallback } from 'react';
import '../Navbar/HeadNav.css';

function BaseClock({ timezone }) {
  const minutes = useRef([]);
  const seconds = useRef([]);
  const hours = useRef([]);

  const setRotation = useCallback((el, rotation) => {
    el.style.setProperty('--rotation', rotation * 360);
  }, []);

  const setClock = useCallback(() => {
    const currentDate = timezone ? moment().tz(timezone) : moment();
    const secondsRatio = currentDate.seconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.minutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.hours()) / 12;
    
    setRotation(seconds.current, secondsRatio);
    setRotation(minutes.current, minutesRatio);
    setRotation(hours.current, hoursRatio);
  }, [timezone, setRotation]);

  useEffect(() => {
    setClock();
    const intervalId = setInterval(setClock, 1000);
    return () => clearInterval(intervalId);
  }, [setClock]);

  return (
    <div className="Clock fade-in" style={{ animationDelay: '10ms' }}>
      <div className="Hand Hours" ref={hours} />
      <div className="Hand Minutes" ref={minutes} />
      <div className="Hand Seconds" ref={seconds} />
      {[...Array(12)].map((_, i) => (
        <div key={i + 1} className={`number number${i + 1}`}>
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default BaseClock;
