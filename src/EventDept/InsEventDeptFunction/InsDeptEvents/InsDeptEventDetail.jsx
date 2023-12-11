import React from "react";
import style from "./Events.module.css";
import { useTranslation } from "react-i18next";
import { useGetOneEventDetail } from "../../../hooks/member_tab/event-api";
import moment from "moment";
import { imageShowUrl } from "../../../services/BaseUrl";

function EventDetail({ eid, setViewStatus }) {
  const { t } = useTranslation();
  const { getOneEventDetail, getOneEventDetailRefetch } = useGetOneEventDetail({
    evid: eid,
    skip: !eid,
  });

  return (
    <div className={style.eventsright}>
      <div className={style.eventsrightimgConrainer}>
        <img
          className={style.eventRightimg}
          src={
            getOneEventDetail?.one_event?.event_banner &&
            getOneEventDetail?.one_event?.event_banner !== "1"
              ? `${imageShowUrl}/${getOneEventDetail?.one_event?.event_banner}`
              : "/images/events/event-default.png"
          }
          alt="event"
        />
        <div className={style.eventCount}>
          <h6>{getOneEventDetail?.one_event?.event_name}</h6>
        </div>
        <div className={style.backCircle} onClick={() => setViewStatus("")}>
          <img
            className={style.backCircleimg}
            src="/images/events/back-arrow-white.svg"
            alt="back"
          />
        </div>
      </div>

      <div className={style.eventDetailsdiv}>
        <h6>{getOneEventDetail?.one_event?.event_name}</h6>
        <p className={style.labelouter}>
          {t("guest")}:{" "}
          <span className={style.labelouterspan}>
            {" "}
            {getOneEventDetail?.one_event?.event_guest}
          </span>
        </p>

        <div className={style.eventDetailsCard}>
          <div className={style.depts}>
            <p className={style.label}> {t("department")} :</p>
            {getOneEventDetail?.one_event?.for_department?.map(
              (dept, index) => {
                if (
                  getOneEventDetail?.one_event?.for_department?.length ===
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
            {t("time")} :{" "}
            <span>
              {moment(getOneEventDetail?.one_event?.event_date).format(
                "Do MMM YYYY"
              )}
              ,{" "}
              {moment(getOneEventDetail?.one_event?.event_time).format("hh:mm")}
            </span>{" "}
          </p>
          <p className={style.label}>
            {" "}
            {t("place")} :{" "}
            <span>{getOneEventDetail?.one_event?.event_place}</span>{" "}
          </p>
        </div>
        <p className={style.labelouter} style={{ marginTop: "0.5rem" }}>
          {t("about_event")}:{" "}
          <span className={style.labelouterspan}>
            {getOneEventDetail?.one_event?.event_description}
          </span>
        </p>
      </div>
    </div>
  );
}

export default EventDetail;
