import React from "react";
import moment from "moment";
import style from "./Activity.module.css";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ApplicationStatusActivity = ({ activity }) => {
  const params = useParams();
  const { t } = useTranslation();
  return (
    <Link
      to={`/q/${params.username}/member/status`}
      state={{
        sid: activity?.notifyPublisher,
        openAs: "STUDENT",
      }}
    >
      <div
        className={
          activity?.notifyReadStatus === "Unread"
            ? `${style.item} ${style.item_active}`
            : style.item
        }
      >
        <div className={style.eachItem}>
          <div
            className={style.eachItemleft}
            style={{
              alignItems: "flex-start",
            }}
          >
            <img
              src={
                activity?.notifyByAdmissionPhoto?.institute?.photoId !== "1"
                  ? `${imageShowUrl}/${activity?.notifyByAdmissionPhoto?.institute?.insProfilePhoto}`
                  : "/images/profileAndCover/admission-profile-img.svg"
              }
              alt="student avatar"
              style={{
                marginTop: "0.3rem",
              }}
            />
            <p>
              <span
                style={{
                  fontWeight: "700",
                }}
              >
                {activity?.notifyByAdmissionPhoto?.institute?.insName ?? ""}
              </span>
              <br />
              {activity?.notifyContent}
              <br />

              <button className={style.view_more_btn}>{t("view_more")}</button>
            </p>
          </div>
          <div className={style.text}>
            <p>{moment(activity?.notifyTime).format("LT")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ApplicationStatusActivity;
