import React from "react";
import style from "./MiddleBody.module.css";
import MiddleBodyMain from "./MiddleBodyMain";
import MiddleBodyRight from "./MiddleBodyRight";
const MiddleBody = ({ state, profileBody, upVote, status }) => {
  const dataFunction = (data) => {
    state(data);
  };
  // console.info("this is profile ", profileBody);
  return (
    <div className={style.middleBodyGap}>
      <MiddleBodyMain state={dataFunction} status={status} />
      <MiddleBodyRight
        questionCount={profileBody?.questionCount}
        answerQuestionCount={profileBody?.answerQuestionCount}
        upVote={upVote}
      />
    </div>
  );
};

export default MiddleBody;
