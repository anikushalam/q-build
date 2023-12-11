import React from "react";
import style from "../Calender.css";

function Prev({ handleClick }) {
  return (
    <div>
      <img
        className="arrowicon"
        src="/images/Input/arrow-left.svg"
        alt=""
        onClick={handleClick}
      />
    </div>
  );
}

export default Prev;
