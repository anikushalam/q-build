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
        <RippleButton>About</RippleButton>
      </div>
      <div
        className={
          activeIndex === 1
            ? `${style.mcqTopItem} ${style.active} `
            : `${style.mcqTopItem} ${style.ripple}`
        }
        onClick={() => setActiveIndex(1)}
      >
        <RippleButton>Extra-Skills</RippleButton>
      </div>
      <div
        className={
          activeIndex === 2
            ? `${style.mcqTopItem} ${style.active}`
            : style.mcqTopItem
        }
        onClick={() => setActiveIndex(2)}
      >
        <RippleButton>Fees Data</RippleButton>
      </div>
    </div>
  );
}

export default Tabs;
