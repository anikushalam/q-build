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
        <RippleButton>Menu</RippleButton>
      </div>
      <div
        className={
          activeIndex === 1
            ? `${style.mcqTopItem} ${style.active} `
            : `${style.mcqTopItem} ${style.ripple}`
        }
        onClick={() => setActiveIndex(1)}
      >
        <RippleButton>Funds</RippleButton>
      </div>
    </div>
  );
}

export default Tabs;
