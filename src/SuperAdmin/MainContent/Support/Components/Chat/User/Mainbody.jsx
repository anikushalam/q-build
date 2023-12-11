import React, { useState } from "react";
import style from "./Mainbody.module.css";

import SingleChat from "./PersonalChat/SingleChat";

function Mainbody() {
  const [clickedInfo, setClickedInfo] = useState(false);
  const toggleInfo = (w) => {
    setClickedInfo(w);
  };

  return (
    <div className={style.mainbody}>
      <div className={style.sidebar}></div>

      {clickedInfo === false && (
        <div className={style.singlechat}>
          <SingleChat toggleInfo={toggleInfo} />
        </div>
      )}
    </div>
  );
}

export default Mainbody;
