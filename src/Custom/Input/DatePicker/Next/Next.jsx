import React from "react";
import style from "../Calender.css";

function Next({ handleClick }) {
  return (
    <div>
      <img
        className="arrowicon"
        src="/images/Input/arrow-right.svg"
        alt=""
        onClick={handleClick}
      />
    </div>
  );
}

export default Next;
