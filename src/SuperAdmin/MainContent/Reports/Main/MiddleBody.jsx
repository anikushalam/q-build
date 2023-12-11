import React from "react";
import style from "./MiddleBody.module.css";
import MiddleBodyMain from "./MiddleBodyMain";
import MiddleBodyRight from "./MiddleBodyRight";
const MiddleBody = ({ state, profileBody }) => {
  return (
    <div className={style.middleBodyGap}>
      <MiddleBodyMain />
      <MiddleBodyRight />
    </div>
  );
};

export default MiddleBody;
