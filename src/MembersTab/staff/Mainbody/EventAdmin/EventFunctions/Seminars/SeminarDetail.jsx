import React from "react";
import style from "./Seminars.module.css";
import { useTranslation } from "react-i18next";
import { useGetOneSeminarDetail } from "../../../../../../hooks/member_tab/event-api";
import moment from "moment";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function SeminarDetail({ eid, setViewStatus }) {
  const { t } = useTranslation();

  const { getOneSeminarDetail, getOneSeminarDetailRefetch } =
    useGetOneSeminarDetail({
      smid: eid,
      skip: !eid,
    });

  return (
    <div className={style.eventsright}>
      <div className={style.eventsrightimgConrainer}>
        <img
          className={style.eventRightimg}
          src={
            getOneSeminarDetail?.one_seminar?.seminar_banner &&
            getOneSeminarDetail?.one_seminar?.seminar_banner !== "1"
              ? `${imageShowUrl}/${getOneSeminarDetail?.one_seminar?.seminar_banner}`
              : "/images/events/event-default.png"
          }
          alt="event"
        />
        <div className={style.eventCount}>
          <h6>{getOneSeminarDetail?.one_seminar?.seminar_name}</h6>
        </div>
        <div className={style.backCircle} onClick={() => setViewStatus("")}>
          <img
            className={style.backCircleimg}
            src="/images/events/back-arrow-white.svg"
            alt="back"
          />
        </div>
        <img
          className={style.editCircle}
          src="/images/events/edit-icon.png"
          alt="edit"
          onClick={() => setViewStatus("editEvent")}
        />
      </div>

      <div className={style.eventDetailsdiv}>
        <h6>{getOneSeminarDetail?.one_seminar?.seminar_name}</h6>
        <p className={style.labelouter}>
          {t("guest")}:{" "}
          <span className={style.labelouterspan}>
            {" "}
            {getOneSeminarDetail?.one_seminar?.seminar_guest}
          </span>
        </p>

        <p className={style.labelouter}>
          {t("mode")}:{" "}
          <span className={style.labelouterspanmode}>
            {" "}
            {getOneSeminarDetail?.one_seminar?.seminar_mode}
          </span>
        </p>

        <div className={style.eventDetailsCard}>
          <div className={style.depts}>
            <p className={style.label}> {t("department")} :</p>
            {getOneSeminarDetail?.one_seminar?.for_department?.map(
              (dept, index) => {
                if (
                  getOneSeminarDetail?.one_seminar?.for_department?.length ===
                  index + 1
                ) {
                  return (
                    <p className={`${style.val} ${style.label}`}>
                      {dept?.dName}
                    </p>
                  );
                } else {
                  return (
                    <p className={`${style.val} ${style.label}`}>
                      {dept?.dName},
                    </p>
                  );
                }
              }
            )}
          </div>
          <p className={style.label}>
            {" "}
            {t("date")} :{" "}
            <span>
              {moment(getOneSeminarDetail?.one_seminar?.seminar_date).format(
                "Do MMM YYYY"
              )}
              ,{" "}
              {getOneSeminarDetail?.one_seminar?.seminar_time
                ?.split("T")[1]
                ?.substring(0, 5)}
            </span>{" "}
          </p>
          <p className={style.label}>
            {" "}
            {t("place")} :{" "}
            <span>{getOneSeminarDetail?.one_seminar?.seminar_place}</span>{" "}
          </p>
        </div>
        <p className={style.labelouter} style={{ marginTop: "0.5rem" }}>
          {t("about_event")}:{" "}
          <span className={style.labelouterspan}>
            {getOneSeminarDetail?.one_seminar?.seminar_description}
          </span>
        </p>
      </div>
    </div>
  );
}

export default SeminarDetail;
