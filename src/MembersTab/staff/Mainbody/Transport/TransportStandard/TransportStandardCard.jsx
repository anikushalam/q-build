import React from "react";
import style from "../../Hostel/Hostel.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";

const TransportStandardCard = ({ standard }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.hostel_batch_container}>
        <img
          className={style.hostel_batch_image}
          src="/images/master-24-grey-icon.svg"
          alt="batch icon"
          style={{
            borderRadius: "0",
          }}
        />
        <div className={style.hostel_batch_container_text}>
          <h6>{standard?.className ?? ""}</h6>
          <p>
            {t("created_on_")}{" "}
            {moment(standard?.createdAt).format("DD MMM yyyy")}
          </p>
        </div>
      </div>
    </>
  );
};

export default TransportStandardCard;
