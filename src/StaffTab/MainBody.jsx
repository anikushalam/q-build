import React from "react";
import style from "./components/MainBody.module.css";
import Divider from "./components/DividerTab/Divider";
function MainBody() {
  return (
    <div className={style.mainbody}>
      <div className={style.header}>
        <div className={style.basicTab}>
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
