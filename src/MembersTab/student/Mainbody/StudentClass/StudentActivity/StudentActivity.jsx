import React from "react";
import { useState } from "react";
import style from "./StudentActivity.module.css";
import Tabs from "../../../../../Tabs/Tabs";

function StudentActivity() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={style.studentMCQ}>
      {/* <div className={style.mcqTop}>
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
      </div> */}
      <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex === 0 && <h1>Attendence</h1>}
      {activeIndex === 1 && <h1>Exam</h1>}
      {activeIndex === 2 && <h1>Activity</h1>}
      {activeIndex === 3 && <h1>Assignment</h1>}
      {activeIndex === 4 && <h1>Library</h1>}
    </div>
  );
}

export default StudentActivity;
