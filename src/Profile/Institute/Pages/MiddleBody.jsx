import React from "react";
import style from "./MiddleBody.module.css";
import MiddleBodyMain from "./MiddleBodyMain";
import MiddleBodyRight from "./MiddleBodyRight";
const MiddleBody = ({ profileBody }) => {
  return (
    <div className={style.middleBodyGap}>
      <MiddleBodyMain />
      <MiddleBodyRight profileRight={profileBody && profileBody} />
    </div>
  );
};

export default MiddleBody;
