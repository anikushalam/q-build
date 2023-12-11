import React from "react";
import style from "../../../staff/Mainbody/Hostel/Hostel.module.css";
import { useTranslation } from "react-i18next";
const StudentStayHistory = () => {
  const { t } = useTranslation();
  return (
    <div className={style.student_renewal_card}>
      <h6>{t("stay_history")}</h6>
      <div className={style.student_renewal_date}>
        <p>{t("start_on")}</p>
        <p>11 Mark 2023</p>
      </div>
      <div className={style.student_renewal_date}>
        <p>{t("expire_on")}</p>
        <p>11 Mark 2023</p>
      </div>
      <p>Stay for 12 Months for fees info click here</p>
      <div className={style.student_renewal_date}>
        <p>{t("deposit_refunded")}</p>
        <p>11 Mark 2023</p>
      </div>
      <h5 className={style.take_admission}>Take Admission Again --</h5>
    </div>
  );
};

export default StudentStayHistory;
