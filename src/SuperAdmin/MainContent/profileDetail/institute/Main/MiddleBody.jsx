import React from "react";
import style from "./MiddleBody.module.css";
import MiddleBodyMain from "./MiddleBodyMain";
import MiddleBodyRight from "./MiddleBodyRight";
const MiddleBody = ({ state, profileBody, bodySection }) => {
  return (
    <div className={style.middleBodyGap}>
      <MiddleBodyMain main={bodySection}/>
      <MiddleBodyRight right={bodySection}/>
    </div>
  );
};

export default MiddleBody;
