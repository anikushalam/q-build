import React from "react";
import style from "./MiddleBodyMain.module.css";

function MiddleBodyMain({ main, upVote }) {
  return (
    <div className={style.middleBodyMain}>
      <div className={style.title}>Know’S (Knowledge Score)</div>
      <div className={style.item}>
        <h6>Total questions asked : {main?.questionCount}</h6>
        <h6>Questions answered : {main?.answerQuestionCount}</h6>
        <h6>Total upvotes : {upVote}</h6>
      </div>
    </div>
  );
}

export default MiddleBodyMain;
