import React, { useEffect } from "react";
import style from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";
import {
  useActivityNotifiationCount,
  useActivityMarkView,
} from "../../../../hooks/member_tab/activity-api";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

function Sidebar() {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const params = useParams();
  const id = useSelector((state) => state.idChange.id);
  const [activityMarkView] = useActivityMarkView();

  const { activityNotifiationCount, activityNotifiationCountRefetch } =
    useActivityNotifiationCount({
      id: id,
      skip: !id,
    });

  useEffect(() => {
    if (id) activityNotifiationCountRefetch();
  }, [id, activityNotifiationCountRefetch]);

  const onMarkAsView = (val) => {
    if (val === "NOTIFICATION") {
      activityMarkView({
        id: id,
        type: "Notification",
      })
        .then((res) => {
          activityNotifiationCountRefetch();
          // console.info("sfdssdgs", res);
        })
        .catch({});
    } else if (val === "ACTIVITY") {
      activityMarkView({
        id: id,
        type: "Activity",
      })
        .then((res) => {
          activityNotifiationCountRefetch();
          // console.info("sfdssdgs", res);
        })
        .catch({});
    } else if (val === "STUDENT_MESSAGE") {
      activityMarkView({
        id: id,
        type: "STUDENT_MESSAGE",
      })
        .then((res) => {
          activityNotifiationCountRefetch();
          // console.info("sfdssdgs", res);
        })
        .catch({});
    } else if (val === "ANNOUNCEMENT") {
      activityMarkView({
        id: id,
        type: "Announcement",
      })
        .then((res) => {
          activityNotifiationCountRefetch();
          // console.info("sfdssdgs", res);
        })
        .catch({});
    } else {
    }
  };
  useEffect(() => {
    if (!getQuery.search) onMarkAsView("NOTIFICATION");
  }, [getQuery.search]);
  // console.info("this is all countt", activityNotifiationCount);
  return (
    <div className={style.sidebar}>
      <div className={style.heading}>{t("activity-place")}</div>
      <div className={style.list}>
        <Link to={`/q/${params.username}/notifications`}>
          <div
            className={
              !getQuery.search
                ? `${style.options} ${style.borderLeft}`
                : style.options
            }
            onClick={() => onMarkAsView("NOTIFICATION")}
          >
            <img
              className={style.img}
              style={
                !getQuery.search ? { display: "none" } : { display: "block" }
              }
              alt="not found"
              src="/images/bell.svg"
            />
            <img
              className={style.imgDark}
              style={
                !getQuery.search ? { display: "block" } : { display: "none" }
              }
              alt="not found"
              src="/images/bell-dark.svg"
            />
            <p>{t("social")}</p>

            {activityNotifiationCount?.notifyCount ? (
              <span className={style.unread_count}>
                {activityNotifiationCount?.notifyCount}
              </span>
            ) : (
              ""
            )}
          </div>
        </Link>
        <Link to={`/q/${params.username}/notifications?a=activity`}>
          <div
            className={
              getQuery.search?.substring(3) === "activity"
                ? `${style.options} ${style.borderLeft}`
                : style.options
            }
            onClick={() => onMarkAsView("ACTIVITY")}
          >
            <img
              className={style.img}
              style={
                getQuery.search?.substring(3) === "activity"
                  ? { display: "none" }
                  : { display: "block" }
              }
              alt="not found"
              src="/images/bell.svg"
            />
            <img
              className={style.imgDark}
              style={
                getQuery.search?.substring(3) === "activity"
                  ? { display: "block" }
                  : { display: "none" }
              }
              alt="not found"
              src="/images/bell-dark.svg"
            />
            <p>{t("activity-place")}</p>

            {activityNotifiationCount?.activityCount ? (
              <span className={style.unread_count}>
                {activityNotifiationCount?.activityCount}
              </span>
            ) : (
              ""
            )}
          </div>
        </Link>
        <Link to={`/q/${params.username}/notifications?a=student-messaage`}>
          <div
            className={
              getQuery.search?.substring(3) === "student-messaage"
                ? `${style.options} ${style.borderLeft}`
                : style.options
            }
            onClick={() => onMarkAsView("STUDENT_MESSAGE")}
          >
            <img
              style={
                getQuery.search?.substring(3) === "student-messaage"
                  ? { display: "none" }
                  : { display: "block" }
              }
              className={style.img}
              alt="not found"
              src="/images/member_tab/admission/internal-query-icon.svg"
            />
            <img
              style={
                getQuery.search?.substring(3) === "student-messaage"
                  ? { display: "block" }
                  : { display: "none" }
              }
              className={style.imgDark}
              alt="not found"
              src="/images/member_tab/admission/internal-query-blue-icon.svg"
            />
            <p>{t("student_message")}</p>

            {activityNotifiationCount?.student_message ? (
              <span className={style.unread_count}>
                {activityNotifiationCount?.student_message}
              </span>
            ) : (
              ""
            )}
          </div>
        </Link>
        <Link to={`/q/${params.username}/notifications?a=announcement`}>
          <div
            className={
              getQuery.search?.substring(3) === "announcement"
                ? `${style.options} ${style.borderLeft}`
                : style.options
            }
            onClick={() => onMarkAsView("ANNOUNCEMENT")}
          >
            <img
              style={
                getQuery.search?.substring(3) === "announcement"
                  ? { display: "none" }
                  : { display: "block" }
              }
              className={style.img}
              alt="not found"
              src="/images/voice-light.svg"
            />
            <img
              style={
                getQuery.search?.substring(3) === "announcement"
                  ? { display: "block" }
                  : { display: "none" }
              }
              className={style.imgDark}
              alt="not found"
              src="/images/voice-dark.svg"
            />
            <p>{t("announcement-place")}</p>

            {activityNotifiationCount?.announcementCount ? (
              <span className={style.unread_count}>
                {activityNotifiationCount?.announcementCount}
              </span>
            ) : (
              ""
            )}
          </div>
        </Link>

        {/* <div
          className={style.subOptions}
          // onClick={() => changeItem(3)}
        >
          <img
            style={clickItem === 3 ? { display: "none" } : { display: "block" }}
            className={style.img}
            alt="not found"
            src="/images/bookmark-post.svg"
          />
          <img
            style={clickItem === 3 ? { display: "block" } : { display: "none" }}
            className={style.imgDark}
            alt="not found"
            src="/images/star-dark-icon.svg"
          />
          <p>{t("announcement-place")}</p>
        </div>

        <div className={style.subOptions} onClick={() => changeItem(4)}>
          <img
            style={clickItem === 4 ? { display: "none" } : { display: "block" }}
            className={style.img}
            alt="not found"
            src="/images/ins-icon.svg"
          />
          <img
            style={clickItem === 4 ? { display: "block" } : { display: "none" }}
            className={style.imgDark}
            alt="not found"
            src="/images/ins-dark-icon.svg"
          />
          <p>{t("announcement-place")}</p>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
