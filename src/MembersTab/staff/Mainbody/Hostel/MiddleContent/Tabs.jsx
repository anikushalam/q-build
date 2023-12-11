import React from "react";
import style from "./Tabs.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
// import RippleButton from "../../../../../../Tabs/RippleButton/RippleButton";

function Tabs({ search, carryParentState, viewAs, openAsUrl }) {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <div className={style.mcqTop}>
      {viewAs === "HOSTEL_UNIT" ? (
        <div className={style.mcqToptabs}>
          {openAsUrl === "STUDENT" || openAsUrl === "HOSTEL_SEARCH" ? (
            ""
          ) : (
            <Link
              to={
                openAsUrl === "DESIGNATION"
                  ? `/q/${params.username}/member/hostel/warden`
                  : openAsUrl === "INSTITUTE"
                  ? `/q/${params.username}/hostel?a=unit&n=info`
                  : `/q/${params.username}/member/hostel?a=unit&n=info`
              }
              state={{ ...carryParentState }}
              style={{ width: "50%" }}
            >
              <div
                className={
                  search?.substring(3) === "unit&n=info" ||
                  search?.substring(3) === "unit&n=hostelites" ||
                  search?.substring(3) === "hostelites" ||
                  !search
                    ? `${style.mcqTopItem} ${style.active}`
                    : style.mcqTopItem
                }
              >
                {t("menu")}
              </div>
            </Link>
          )}
          <Link
            to={
              openAsUrl === "STUDENT"
                ? `/q/${params.username}/member/student/hostel?a=unit&n=menu&n=room`
                : openAsUrl === "HOSTEL_SEARCH"
                ? `/q/${params.username}/hostel/profile?a=unit&n=menu&n=room`
                : openAsUrl === "DESIGNATION"
                ? `/q/${params.username}/member/hostel/warden?a=menu&n=room`
                : openAsUrl === "INSTITUTE"
                ? `/q/${params.username}/hostel?a=unit&n=menu&n=room`
                : `/q/${params.username}/member/hostel?a=unit&n=menu&n=room`
            }
            state={{ ...carryParentState }}
            style={{
              width:
                openAsUrl === "STUDENT" || openAsUrl === "HOSTEL_SEARCH"
                  ? "100%"
                  : "50%",
            }}
          >
            <div
              className={
                search?.substring(3) === "unit&n=menu&n=room" ||
                search?.substring(3) === "menu&n=room"
                  ? `${style.mcqTopItem} ${style.active}`
                  : style.mcqTopItem
              }
            >
              {t("rooms")}
            </div>
          </Link>
        </div>
      ) : (
        <div className={style.mcqToptabs}>
          <Link
            to={`/q/${params.username}/member/hostel`}
            state={{ ...carryParentState }}
            style={{ width: "33.3%" }}
          >
            <div
              className={
                !search
                  ? `${style.mcqTopItem} ${style.active}`
                  : style.mcqTopItem
              }
            >
              {t("menu")}
            </div>
          </Link>
          <Link
            to={`/q/${params.username}/member/hostel?a=fee`}
            state={{ ...carryParentState }}
            style={{ width: "33.3%" }}
          >
            <div
              className={
                search?.substring(3, 6) === "fee"
                  ? `${style.mcqTopItem} ${style.active}`
                  : style.mcqTopItem
              }
            >
              {t("fee_structure")}
            </div>
          </Link>
          <Link
            to={`/q/${params.username}/member/hostel?a=fund`}
            state={{ ...carryParentState }}
            style={{ width: "33.3%" }}
          >
            <div
              className={
                search?.substring(3) === "fund"
                  ? `${style.mcqTopItem} ${style.active}`
                  : style.mcqTopItem
              }
            >
              {t("funds")}
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Tabs;
