import React from "react";
import style from "./SidebarTop.module.css";

function SidebarTop({ data, status }) {
  return (
    <div className={style.sidebartop}>
      <div
        className={style.imgcontainer}
        // style={{ backgroundImage: "" }}
      >
        <img alt="" src="/images/member_tab/class/default_avatar.svg" />
      </div>
      <div className={style.textContainer}>
        <h6>kkwagh_engineering01</h6>

        <p>K. K. Wagh Institute of Engineering Education and Research</p>
      </div>

      <div className={style.btn}>Block</div>
    </div>
  );
}

export default SidebarTop;
