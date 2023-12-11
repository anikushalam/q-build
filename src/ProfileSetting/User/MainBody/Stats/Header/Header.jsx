import React from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";

import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header({ dashboardData }) {
  return (
    <Link to={`/q/${dashboardData?.user?.username}/profile`}>
      <div className={style.header}>
        <div className={style.imgContainer}>
          {/* <Link to={`/q/${dashboardData?.institute?.name}/profile`}> */}
          <img
            src={
              dashboardData?.user?.photoId !== "1"
                ? `${imageShowUrl}/${dashboardData?.user?.profilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
          />
          {/* </Link> */}
        </div>
        <div className={style.textContainer}>
          <h5>{dashboardData?.user?.username}</h5>
          <p>{dashboardData?.user?.userLegalName}</p>
        </div>
      </div>
    </Link>
  );
}

export default Header;
