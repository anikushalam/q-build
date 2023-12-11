import React from "react";
import style from "./FourthRow.module.css";
import LastActivity from "./LastActivity";
import Achivement from "./Achivement";

function FourthRow() {
  return (
    <div className={style.fourthRow}>
      <LastActivity />
      <Achivement />
    </div>
  );
}

export default FourthRow;
