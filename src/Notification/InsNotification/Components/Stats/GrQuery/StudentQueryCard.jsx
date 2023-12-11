import React, { useState } from "react";
import style from "./GrQuery.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import moment from "moment";
import { useInstituteGRNotificationAction } from "../../../../../hooks/member_tab/activity-api";
import QLoader from "../../../../../Loader/QLoader";
const StudentQueryCard = ({ query, onRefetch }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);

  const [instituteGRNotificationAction] = useInstituteGRNotificationAction();

  const onAction = (type) => {
    if (query?._id && type) {
      setDisabled((pre) => !pre);
      instituteGRNotificationAction({
        qid: query?._id,
        status: `${type}`,
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      <div className={style.query_card}>
        <div className={style.query_card_head}>
          <img
            src={
              query?.query_by_student?.studentProfilePhoto
                ? `${imageShowUrl}/${query?.query_by_student?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
            alt=""
          />
          <div className={style.query_card_text}>
            <h6>{`${query?.query_by_student?.studentFirstName ?? ""} ${
              query?.query_by_student?.studentMiddleName ?? ""
            } ${query?.query_by_student?.studentLastName ?? ""}`}</h6>
            <h6>
              <span
                style={{
                  fontWeight: "400",
                }}
              >
                {t("gr_number")}
              </span>{" "}
              {query?.query_gr ?? ""}
            </h6>
          </div>
        </div>
        <p className={style.query_card_content}>{query?.query_content ?? ""}</p>

        {query?.query_status === "Pending" ? (
          <div className={style.button_container}>
            <button
              className={style.reject_btn}
              onClick={() => onAction("Rejected")}
            >
              {t("reject")}
            </button>
            <button
              className={style.approve_btn}
              onClick={() => onAction("Approved")}
            >
              {t("approve")}
            </button>
          </div>
        ) : null}

        <div className={style.query_date}>
          <p>{moment(query?.created_at).format("DD MMMM, yyyy")}</p>
          <p>{moment(query?.created_at).format("LT")}</p>
        </div>
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default StudentQueryCard;
