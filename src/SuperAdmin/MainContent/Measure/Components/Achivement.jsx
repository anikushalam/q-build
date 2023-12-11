import React from "react";
import style from "./Achivement.module.css";
import "./Achivement.css";
// import SemiCircleProgressBar from "react-progressbar-semicircle";

function Achivement() {
  return (
    <div className={style.achivement}>
      <div>
        {/* <SemiCircleProgressBar
          percentage={74}
          showPercentValue
          stroke="#420789"
          strokeWidth={55}
          diameter={350}
        /> */}

        <div className={style.suggestion}>
          <div className={style.bad}>0 To 40% is Bad</div>

          <div className={style.good}>40 To 80% is Good</div>

          <div className={style.excillent}>80 To 100% is Excilent</div>
        </div>

        <div className={style.status}>
          <span className={style.statusNbr}>74%</span> &nbsp; Target achieve in
          June 2022, Its Good!
        </div>
      </div>
    </div>
  );
}

export default Achivement;
