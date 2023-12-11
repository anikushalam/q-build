import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "../../Hostel/Hostel.module.css";

const TransportPendingFeesCard = ({ applicant }) => {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <Link
      to={`/q/${params.username}/student/profile/admission`}
      state={{
        sid: applicant?._id,
        viewAs: "ADMISSION_ADMIN",
        openTab: "FEES_DATA",
      }}
    >
      <div className={style.hostelite_container} title="View Profile">
        <img
          alt="Student Avatar"
          src={
            applicant.photoId !== "1"
              ? `${imageShowUrl}/${applicant?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
        />
        <div className={style.hostelite_container_inner}>
          <div className={style.hostelite_container_inner_text}>
            <h6>{`${applicant.studentFirstName} ${
              applicant.studentMiddleName ? applicant.studentMiddleName : ""
            } ${applicant.studentLastName}`}</h6>

            <p>{applicant?.student_unit?.hostel_unit_name ?? ""}</p>
          </div>
          <div className={style.hostelite_container_inner_text}>
            <h6>
              {t("rs")} {". "}
              {applicant?.vehicleRemainFeeCount ?? 0}
            </h6>
            <p>{t("pending_fees")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TransportPendingFeesCard;
