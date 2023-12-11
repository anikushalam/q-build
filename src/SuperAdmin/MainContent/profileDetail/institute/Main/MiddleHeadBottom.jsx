import React from "react";
import style from "./MiddleHeadBottom.module.css";

function MiddleHeadBottom({ bottomSection }) {
  return (
    <div className={style.bottomDiv}>
      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>{bottomSection?.postCount}</p>
        <p className={style.bottomText}>Posts</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>{bottomSection?.followersCount}</p>
        <p className={style.bottomText}>Followers</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>{bottomSection?.followingCount}</p>
        <p className={style.bottomText}>Following</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>{bottomSection?.staffCount + bottomSection?.studentCount}</p>
        <p className={style.bottomText}>Joined</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>{bottomSection?.departmentCount}</p>
        <p className={style.bottomText}>Departments</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>{bottomSection?.staffCount}</p>
        <p className={style.bottomText}>Staff</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>{bottomSection?.announcementCount}</p>
        <p className={style.bottomText}>Announcements</p>
      </div>
      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>{bottomSection?.admissionCount}</p>
        <p className={style.bottomText}>Admission</p>
      </div>
    </div>
  );
}

export default MiddleHeadBottom;
