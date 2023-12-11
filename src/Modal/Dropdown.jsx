import React from "react";
import style from "./Modal.module.css";

const Dropdown = ({ options, switchOption, type, setClick, top }) => {
  return (
    <div className={style.profileToolTip} style={{ top: `${top}` }}>
      <div className={style.triangle}></div>

      <div className={style.profilelist}>
        {options?.map((option, index) => (
          <div
            value={option}
            onClick={() => {
              switchOption(option);
              setClick((pre) => !pre);
            }}
            key={index}
          >
            {type === "dept"
              ? option?.dName
              : type === "cls"
              ? option?.className
              : option?.subjectName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
