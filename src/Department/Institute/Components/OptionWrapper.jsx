import React from "react";
import style from "./OptionWrapper.module.css";

const OptionWrapper = ({ selectOptions, onClickOptionHandler }) => {
  return (
    <div className={style.profileToolTip}>
      <div className={style.triangle}></div>

      <div className={style.profilelist}>
        {selectOptions?.map((option, index) => (
          <div
            value={option}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              onClickOptionHandler(option);
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionWrapper;
