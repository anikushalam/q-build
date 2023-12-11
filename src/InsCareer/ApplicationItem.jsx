import React, { useState } from "react";
import style from "./VacancyDetails.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useDispatch } from "react-redux";
import { careerChangeAction } from "../redux/store/career-slice";
import { fileShowUrl } from "../services/BaseUrl";

function ApplicationItem({ application, setStatus, vid, lcid }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [expand, setExpand] = useState(false);

  return (
    <div className={style.oneRow}>
      <div className={style.oneRowDate}>
        <p className={style.oneRowDateText}>
          {" "}
          {`${application?.createdAt?.split("T")[0]?.split("-")[2]}-${
            application?.createdAt?.split("T")[0]?.split("-")[1]
          }-${application?.createdAt?.split("T")[0]?.split("-")[0]}`}
        </p>
      </div>
      <div className={style.oneRowName}>
        <div className={style.oneRowNameImage}>
          <img src="/images/ins_default_profile.svg" loading="lazy" alt="" />
        </div>
        <div>
          <p className={style.oneRowNameText}>{application?.endUserName}</p>
          <p className={style.oneRowNamePlaceholder}>
            {t("dob")}:
            {`${application?.endUserDOB?.split("-")[2]}-${
              application?.endUserDOB?.split("-")[1]
            }-${application?.endUserDOB?.split("-")[0]}`}
          </p>
          {application?.interview_date && application?.interview_date !== "" ? (
            <p className={style.interview}>{application?.interview_type}</p>
          ) : (
            <p
              className={style.schedule}
              onClick={() => {
                dispatch(
                  careerChangeAction.careerQuery({
                    acid: application?._id,
                    vid: vid,
                    lcid: lcid,
                  })
                );
                setStatus("interviewForm");
              }}
            >
              {t("schedule_interview")}
            </p>
          )}

          {application?.interview_date && (
            <div>
              <p className={style.date}>
                {" "}
                {t("time")}:{" "}
                {moment(application?.interview_date).format("Do MMM YYYY")},{" "}
                {moment(application?.interview_time).format("hh:mm a")}{" "}
              </p>
              {application?.interview_type === "Virtual Interview" ? (
                <p className={style.date}>
                  {t("link")}:{" "}
                  <span>
                    <a href={`${application?.interview_link}`} target="_blank">
                      {application?.interview_link}
                    </a>
                  </span>{" "}
                </p>
              ) : (
                <p className={style.date}>
                  {t("place")}: {application?.interview_place}{" "}
                </p>
              )}
              <p className={style.date}>
                {t("instructions")}:{" "}
                {application?.interview_guidelines?.length > 15 && !expand
                  ? application?.interview_guidelines?.match(/.{1,15}/g)[0]
                  : application?.interview_guidelines?.length > 15 && expand
                  ? application?.interview_guidelines
                  : application?.interview_guidelines}
                {application?.interview_guidelines?.length > 15 && (
                  <span
                    className={style.instructuionspan}
                    onClick={() => setExpand(!expand)}
                  >
                    {expand ? t("read_less") : t("read-more")}
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={style.oneRowContact}>
        <div className={style.oneRowContactEmailIcon}>
          <img src="/images/admin/mail-dark-icon.svg" alt="gender icon" />
          <p className={style.oneRowContactEmail}>
            {application?.endUserEmail}
          </p>
        </div>
        <div className={style.oneRowContactEmailIcon}>
          <img src="/images/phone-white.svg" alt="" />
          <p className={style.oneRowContactNumber}>
            {application?.endUserPhoneNumber}
          </p>
        </div>
      </div>

      <div className={`${style.oneRowIndex} ${style.oneRowwIndex}`}>
        <a
          href={`${fileShowUrl}/${application?.endUserResume}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/career/insCareer/file_download.svg" />
        </a>
      </div>
    </div>
  );
}

export default ApplicationItem;
