import React from "react";
import style from "./Tabs.module.css";
import RippleButton from "./RippleButton/RippleButton";

function Tabs({ activeIndex, setActiveIndex }) {
  return (
    <div className={style.mcqTop}>
      <div
        className={
          activeIndex === 0
            ? `${style.mcqTopItem} ${style.active}`
            : style.mcqTopItem
        }
        onClick={() => setActiveIndex(0)}
      >
        <RippleButton>Attendence</RippleButton>
      </div>
      <div
        className={
          activeIndex === 1
            ? `${style.mcqTopItem} ${style.active} `
            : `${style.mcqTopItem} ${style.ripple}`
        }
        onClick={() => setActiveIndex(1)}
      >
        <RippleButton>Exam</RippleButton>
      </div>
      <div
        className={
          activeIndex === 2
            ? `${style.mcqTopItem} ${style.active}`
            : style.mcqTopItem
        }
        onClick={() => setActiveIndex(2)}
      >
        <RippleButton>Activity</RippleButton>
      </div>
      <div
        className={
          activeIndex === 3
            ? `${style.mcqTopItem} ${style.active}`
            : style.mcqTopItem
        }
        onClick={() => setActiveIndex(3)}
      >
        <RippleButton>Assignment</RippleButton>
      </div>
      <div
        className={
          activeIndex === 4
            ? `${style.mcqTopItem} ${style.active}`
            : style.mcqTopItem
        }
        onClick={() => setActiveIndex(4)}
      >
        <RippleButton>Library</RippleButton>
      </div>
    </div>
  );
}

export default Tabs;
