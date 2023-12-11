import React from "react";
import style from "./ComplaintDetails.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";

function ComplaintDetails({ cDetail }) {
  const { t } = useTranslation();
  return (
    <>
      <div className={style.complaintDetails}>
        <div className={style.detailsheader}>{t("complaint")}</div>
        <hr />
        <div className={style.detailsbody}>
          <h6>
            {cDetail?.complaintType}
            {t("complaint")}
          </h6>
          {/* <h6>Complaint To Head Of Department</h6> */}
          <p>{cDetail?.complaintContent}</p>
          <div className={style.footer}>
            <h6 className={style.red}>{cDetail?.complaintStatus}</h6>
            {/* <h6 className={style.blue}>Report To Admin</h6> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ComplaintDetails;
