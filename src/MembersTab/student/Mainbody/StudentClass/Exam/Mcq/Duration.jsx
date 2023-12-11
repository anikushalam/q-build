import React, { useEffect, useRef, useState } from "react";
import style from "./StudentMCQ.module.css";

const Duration = ({ totalTime, setAutoSubmit }) => {
  const [timer, setTimer] = useState("00:01:00");

  const Ref = useRef(null);
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    setTimer(
      `${Math.floor(totalTime / 3600)}:${Math.floor((totalTime % 3600) / 60)}:${
        (totalTime % 3600) % 60
      }`
    );
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setHours(deadline.getHours() + Math.floor(totalTime / 3600));
    deadline.setMinutes(
      deadline.getMinutes() + Math.floor((totalTime % 3600) / 60)
    );
    deadline.setSeconds(deadline.getSeconds() + ((totalTime % 3600) % 60));
    return deadline;
  };

  // const startTimer = () => {
  //   interval = setInterval(() => {
  //     totalTime--;
  //     let hrs = Math.floor(totalTime / 3600);
  //     let mins = Math.floor((totalTime % 3600) / 60);
  //     let secs = (totalTime % 3600) % 60;
  //     if (totalTime < 0) {
  //       clearInterval(interval.current);
  //       setAutoSubmit(true);
  //     } else {
  //       setTiming({
  //         hrs: hrs,
  //         mins: mins,
  //         secs: secs,
  //       });
  //     }
  //   }, 1000);
  // };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  useEffect(() => {
    if (timer === "00:00:00") setAutoSubmit(true);
  }, [timer]);
  return <h6 className={style.examTime}>{timer}</h6>;
};

export default Duration;
