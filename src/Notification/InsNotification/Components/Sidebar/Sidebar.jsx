import React from "react";
import style from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Sidebar() {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const onNavigateTab = (value) => {
    if (value) {
      navigate(`/q/${params.username}/notifications?a=${value}`);
    } else {
      navigate(`/q/${params.username}/notifications`);
    }
  };

  return (
    <div className={style.sidebar}>
      <div className={style.heading}>{t("activity")}</div>
      <div className={style.list}>
        <div
          className={
            !getQuery?.search
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => onNavigateTab("")}
        >
          <img
            className={style.img}
            style={
              !getQuery?.search ? { display: "none" } : { display: "block" }
            }
            alt="not found"
            src="/images/bell.svg"
          />
          <img
            className={style.imgDark}
            style={
              !getQuery?.search ? { display: "block" } : { display: "none" }
            }
            alt="not found"
            src="/images/bell-dark.svg"
          />
          <p>{t("notification")}</p>
        </div>
        <div
          className={
            getQuery?.search?.substring(3) === "announcement"
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => onNavigateTab("announcement")}
        >
          <img
            style={
              getQuery?.search?.substring(3) === "announcement"
                ? { display: "none" }
                : { display: "block" }
            }
            className={style.img}
            alt="not found"
            src="/images/voice-light.svg"
          />
          <img
            style={
              getQuery?.search?.substring(3) === "announcement"
                ? { display: "block" }
                : { display: "none" }
            }
            className={style.imgDark}
            alt="not found"
            src="/images/voice-dark.svg"
          />
          <p>{t("announcement")}</p>
        </div>
        <div
          className={
            getQuery?.search?.substring(3) === "grquery"
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => onNavigateTab("grquery")}
        >
          <img
            style={
              getQuery?.search?.substring(3) === "grquery"
                ? { display: "none" }
                : { display: "block" }
            }
            className={style.img}
            alt="not found"
            src="/images/member_tab/admission/internal-query-icon.svg"
          />
          <img
            style={
              getQuery?.search?.substring(3) === "grquery"
                ? { display: "block" }
                : { display: "none" }
            }
            className={style.imgDark}
            alt="not found"
            src="/images/member_tab/admission/internal-query-blue-icon.svg"
          />
          <p>{t("gr_internal_query")}</p>
        </div>
        {/* 
        <div
          className={
            clickItem === 3
              ? `${style.options} ${style.borderLeft}`
              : style.options
          }
          onClick={() => changeItem(3)}
        >
          <img
            style={clickItem === 3 ? { display: "none" } : { display: "block" }}
            className={style.img}
            alt="not found"
            src="/images/voice-light.svg"
          />
          <img
            style={clickItem === 3 ? { display: "block" } : { display: "none" }}
            className={style.imgDark}
            alt="not found"
            src="/images/voice-dark.svg"
          />
          <p>Activity</p>
        </div> */}

        {/* <div className={style.subOptions} 
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
