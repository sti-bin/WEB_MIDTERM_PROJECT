import React, { useState, useEffect } from "react";
import "./clockstyles.css"; 

const LiveClock = ({ isRunning, is24Hour }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (!isRunning) return; 

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]); 

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    if (!is24Hour) {
      hours = hours % 12 || 12; // Convert 24-hour time to 12-hour format
    }

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return is24Hour ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="clock-container">
      <div className="clock">{formatTime(time)}</div>
    </div>
  );
};

export default LiveClock;
