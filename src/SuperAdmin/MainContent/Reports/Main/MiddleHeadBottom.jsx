import React from "react";
import style from "./MiddleHeadBottom.module.css";

function MiddleHeadBottom() {
  return (
    <div className={style.bottomDiv}>
      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>23</p>
        <p className={style.bottomText}>Posts</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>12</p>
        <p className={style.bottomText}>Followers</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>56</p>
        <p className={style.bottomText}>Following</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>08</p>
        <p className={style.bottomText}>Joined</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>10</p>
        <p className={style.bottomText}>Departments</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>05</p>
        <p className={style.bottomText}>Staff</p>
      </div>

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>0</p>
        <p className={style.bottomText}>Announcements</p>
      </div>
      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>0</p>
        <p className={style.bottomText}>Admission</p>
      </div>
    </div>
  );
}

export default MiddleHeadBottom;
