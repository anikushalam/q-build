import React from "react";
import style from "./DepartmentSidebarTop.module.css";
import { Link } from "react-router-dom";

function SidebarrTop({ insName }) {
  return (
    <div className={style.sidebarback}>
      <Link to={`/q/${insName}/feed`}>
        <div className={style.sidebarbackflex}>
          <img src="/images/arr-left-white.svg" />
          <h6>Go Back</h6>
        </div>
      </Link>
    </div>
  );
}

export default SidebarrTop;
