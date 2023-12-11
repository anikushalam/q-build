import React from "react";
import style from "./ParticipateEvents.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";

function ParticipateEventCard({ cardRef, event, setDetailView, setPid }) {
  const { t } = useTranslation();
  return (
    <div
      className={style.peventCard}
      ref={cardRef}
      onClick={() => {
        setPid(event?._id);
        setDetailView(true);
      }}
    >
      <div className={style.peventCardtop}>
        <div className={style.imgcontainer}>
          <img src="/images/participativeEvent/participate-icon.svg" alt="" />
        </div>
        <div className={style.issuedBookItemMidright}>
          <h6>{event?.event_name}</h6>
          <p>{moment(event?.event_date).format("Do MMM YYYY")}</p>
        </div>
      </div>
      <div className={style.peventCardbottom}>
        <p className={style.peventCardbottomp}>
          {t("event_fees")}{" "}
          <span>{event?.event_fee ? `Rs. ${event?.event_fee}` : `Rs. 0`}</span>
        </p>
        <p className={style.peventCardbottomp}>
          {t("last_date_to_apply")}{" "}
          <span>
            {moment(event?.event_app_last_date).format("Do MMM YYYY")}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ParticipateEventCard;
