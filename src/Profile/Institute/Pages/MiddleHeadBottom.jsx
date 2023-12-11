import React from "react";
import style from "./MiddleHeadBottom.module.css";
import { Link } from "react-router-dom";
const MiddleHeadBottom = ({ data, profileBottom, searchId }) => {
  return (
    <div className={style.bottomDiv}>
      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>
          {profileBottom && profileBottom.postCount}
        </p>
        {profileBottom?.postCount < 2 ? (
          <p className={style.bottomText}>Post</p>
        ) : (
          <p className={style.bottomText}>Posts</p>
        )}
      </div>
      {searchId ? (
        <div className={style.bottomOneItem}>
          <p className={style.bottomCount}>
            {profileBottom && profileBottom.followersCount}
          </p>

          {profileBottom?.followersCount < 2 ? (
            <p className={style.bottomText}>Follower</p>
          ) : (
            <p className={style.bottomText}>Followers</p>
          )}
        </div>
      ) : (
        <Link to={`/q/${profileBottom?.name}/following`}>
          <div className={style.bottomOneItem}>
            <p className={style.bottomCount}>
              {profileBottom && profileBottom.followersCount}
            </p>

            {profileBottom?.followersCount < 2 ? (
              <p className={style.bottomText}>Follower</p>
            ) : (
              <p className={style.bottomText}>Followers</p>
            )}
          </div>
        </Link>
      )}
      {searchId ? (
        <div
          className={
            data === true
              ? `${style.bottomOneItem} ${style.bottomOneItemActive}`
              : style.bottomOneItem
          }
        >
          <p className={style.bottomCount}>
            {profileBottom && profileBottom.followingCount}
          </p>
          <p className={style.bottomText}>Following</p>
        </div>
      ) : (
        <Link to={`/q/${profileBottom?.name}/following`}>
          <div
            className={
              data === true
                ? `${style.bottomOneItem} ${style.bottomOneItemActive}`
                : style.bottomOneItem
            }
          >
            <p className={style.bottomCount}>
              {profileBottom && profileBottom.followingCount}
            </p>
            <p className={style.bottomText}>Following</p>
          </div>
        </Link>
      )}

      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>
          {profileBottom &&
            profileBottom.staffCount + profileBottom.studentCount}
        </p>
        <p className={style.bottomText}>Joined</p>
      </div>
      {profileBottom?.accessFeature === "Locked" || searchId ? (
        <div className={style.bottomOneItem}>
          <p className={style.bottomCount}>
            {profileBottom && profileBottom.departmentCount}
          </p>

          {profileBottom?.departmentCount < 2 ? (
            <p className={style.bottomText}>Department</p>
          ) : (
            <p className={style.bottomText}>Departments</p>
          )}
        </div>
      ) : (
        <Link to={`/q/${profileBottom?.name}/department`}>
          <div className={style.bottomOneItem}>
            <p className={style.bottomCount}>
              {profileBottom && profileBottom.departmentCount}
            </p>

            {profileBottom?.departmentCount < 2 ? (
              <p className={style.bottomText}>Department</p>
            ) : (
              <p className={style.bottomText}>Departments</p>
            )}
          </div>
        </Link>
      )}
      {profileBottom?.accessFeature === "Locked" || searchId ? (
        <div className={style.bottomOneItem}>
          <p className={style.bottomCount}>
            {profileBottom && profileBottom.staffCount}
          </p>

          {profileBottom?.staffCount < 2 ? (
            <p className={style.bottomText}>Staff</p>
          ) : (
            <p className={style.bottomText}>Staffs</p>
          )}
        </div>
      ) : (
        <Link to={`/q/${profileBottom?.name}/staff`}>
          <div className={style.bottomOneItem}>
            <p className={style.bottomCount}>
              {profileBottom && profileBottom.staffCount}
            </p>

            {profileBottom?.staffCount < 2 ? (
              <p className={style.bottomText}>Staff</p>
            ) : (
              <p className={style.bottomText}>Staffs</p>
            )}
          </div>
        </Link>
      )}
      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>
          {profileBottom && profileBottom.announcementCount
            ? profileBottom.announcementCount
            : 0}
        </p>

        {profileBottom?.announcementCount < 2 ? (
          <p className={style.bottomText}>Announcement</p>
        ) : (
          <p className={style.bottomText}>Announcements</p>
        )}
      </div>
      <div className={style.bottomOneItem}>
        <p className={style.bottomCount}>
          {profileBottom && profileBottom.admissionCount
            ? profileBottom.admissionCount
            : 0}
        </p>
        <p className={style.bottomText}>Admission</p>
      </div>
    </div>
  );
};

export default MiddleHeadBottom;
