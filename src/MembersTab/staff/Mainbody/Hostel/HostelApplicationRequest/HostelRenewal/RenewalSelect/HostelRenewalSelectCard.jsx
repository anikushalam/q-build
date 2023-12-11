import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "../../../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";

const HostelRenewalSelectCard = ({ onSelectOffileFees, applicant }) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();

  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        sid: applicant?.student?._id,
        viewAs: "ADMISSION_ADMIN",
      },
    });
  };

  const onSelectOffileFeesApplicant = (e) => {
    e.stopPropagation();
    onSelectOffileFees(applicant);
  };
  const onRequestedOpen = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={style.applicant_card_container}
        onClick={onViewApplicantProfile}
        title="View Profile"
      >
        <div className={style.applicant_card_inner}>
          <img
            alt="Student Request Avatar"
            src={
              applicant?.student?.photoId !== "1"
                ? `${imageShowUrl}/${applicant?.student?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
          />
          <div className={style.applicant_card_inner_info}>
            <h6>
              {`${applicant?.student?.studentFirstName} ${
                applicant?.student?.studentMiddleName
                  ? applicant?.student?.studentMiddleName
                  : ""
              } ${applicant?.student?.studentLastName}`}
            </h6>
            <h6>
              {t("fee_structure")}
              {" : "}
              {applicant?.student?.hostel_fee_structure?.category_master
                ?.category_name ?? ""}
              {", "}
              {t("rs")}{" "}
              {applicant?.student?.hostel_fee_structure?.total_admission_fees ??
                ""}
            </h6>
            <p>
              {applicant?.install_type
                ? applicant?.install_type
                : `
              ${t("select_on")}:
              ${moment(applicant?.select_on).format("DD MMM yyyy")}`}
            </p>
          </div>
        </div>

        <div className={style.applicant_card_contact}>
          <div className={style.applicant_card_contact_inner}>
            <img src="/images/admidion_department/gender.svg" alt="" />
            <p>{applicant?.student?.studentGender}</p>
          </div>
          {(applicant?.student?.studentPhoneNumber ||
            applicant?.student?.studentParentsPhoneNumber) && (
            <div className={style.applicant_card_contact_inner}>
              <img src="/images/admidion_department/phone.svg" alt="" />
              <p
                style={{
                  marginBottom: "0 !important",
                }}
              >
                {applicant?.student?.studentPhoneNumber
                  ? applicant?.student?.studentPhoneNumber
                  : applicant?.student?.studentParentsPhoneNumber}
              </p>
            </div>
          )}
        </div>
        {applicant?.payment_status?.toLowerCase() === "receipt requested" ? (
          <div className={style.selectBtnContainer}>
            <div
              className={style.receipt_requested_btn}
              onClick={onRequestedOpen}
            >
              {t("receipt_requested")}
            </div>
          </div>
        ) : (
          <div className={style.selectBtnContainer}>
            {applicant?.payment_status?.toLowerCase() === "pending" && (
              <div
                className={style.selectBtn}
                onClick={onSelectOffileFeesApplicant}
              >
                {t("collect_fee")}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default HostelRenewalSelectCard;
