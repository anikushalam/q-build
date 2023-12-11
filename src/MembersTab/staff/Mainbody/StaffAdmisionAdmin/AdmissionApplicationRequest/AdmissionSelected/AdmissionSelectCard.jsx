import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import {
  imageShowUrl,
  pdfShowUrlNext,
} from "../../../../../../services/BaseUrl";
import style from "../AdmissionApplicationRequest.module.css";
import ApplicationProcessUndo from "../ProcessUndo/ApplicationProcessUndo";

const AdmissionSelectCard = ({
  applicant,
  onSelectOffileFees,
  onCollectDocs,
  onEditFee,
  // onNotConfirm,
  instituteId,
  applicationId,
  onRefetch,
}) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();

  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        sid: applicant?.student?._id,
        viewAs: "ADMISSION_ADMIN",
        instituteId: instituteId,
      },
    });
  };

  const onSelectOffileFeesApplicant = (e) => {
    e.stopPropagation();
    onSelectOffileFees(applicant);
  };
  const onCollectDocsApplicant = (e) => {
    e.stopPropagation();
    onCollectDocs(applicant);
  };

  const onEditFeeStructure = (e) => {
    e.stopPropagation();
    onEditFee(applicant?.student?._id);
  };
  // const onNotConfirmed = (e) => {
  //   e.stopPropagation();
  //   onNotConfirm(applicant);
  // };

  const onRequestedOpen = (e) => {
    e.stopPropagation();
  };
  const onViewApplication = (e) => {
    e.stopPropagation();
  };

  return (
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
          loading="lazy"
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
            {applicant?.student?.fee_structure?.category_master
              ?.category_name ?? ""}
            {", "}
            {t("rs")} {applicant?.student?.fee_structure?.applicable_fees ?? ""}
            {/* {applicant?.student?.fee_structure?.total_admission_fees ?? ""} */}
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
          applicant?.student?.user?.userPhoneNumber ||
          applicant?.student?.user?.userEmail ||
          applicant?.student?.studentParentsPhoneNumber) && (
          <div className={style.applicant_card_contact_inner}>
            <img src="/images/admidion_department/phone.svg" alt="" />
            <p
              style={{
                marginBottom: "0 !important",
              }}
            >
              {applicant?.student?.user?.userPhoneNumber
                ? applicant?.student?.user?.userPhoneNumber
                : applicant?.student?.user?.userEmail
                ? applicant?.student?.user?.userEmail
                : applicant?.student?.studentPhoneNumber
                ? applicant?.student?.studentPhoneNumber
                : applicant?.student?.studentParentsPhoneNumber}
            </p>
          </div>
        )}
      </div>
      <div className={style.applicant_card_reciept} onClick={onViewApplication}>
        <a
          href={`${pdfShowUrlNext}/${applicant?.student?.application_print?.[0]?.value}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <img
            src="/images/member_tab/admission/admission-form-download.svg"
            alt="receipt icon"
            title="View Application Form"
          />
        </a>
      </div>

      {/* {applicant?.payment_status?.toLowerCase() === "pending" ? ( */}
      {
        // applicant?.edited_struct ? (
        //   <div
        //     className={style.selectBtnContainer}
        //     style={{ display: "flex", justifyContent: "space-evenly" }}
        //   >
        //     {/* <div className={style.notConfirmedBtn} onClick={onNotConfirmed}>
        //       {t("not_condirmed")}{" "}
        //     </div> */}
        //     <div className={style.onlineBtn} onClick={onCollectDocsApplicant}>
        //       {t("collect_docs")}
        //     </div>
        //     <img
        //       src="/images/bank-edit-icon.svg"
        //       alt="back arrow"
        //       className={style.back_icon}
        //       onClick={onEditFeeStructure}
        //     />
        //   </div>
        // ) :
        applicant?.payment_status?.toLowerCase() === "receipt requested" ? (
          <div
            className={style.selectBtnContainer}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div
              className={style.receipt_requested_btn}
              onClick={onRequestedOpen}
            >
              {t("receipt_requested")}
            </div>
            <img
              src="/images/bank-edit-icon.svg"
              alt="back arrow"
              className={style.back_icon}
              onClick={onEditFeeStructure}
            />
          </div>
        ) : (
          <div
            className={style.selectBtnContainer}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {applicant?.payment_status?.toLowerCase() === "pending" &&
              (applicant?.docs_collect === "Not Collected" ? (
                <div
                  className={style.onlineBtn}
                  onClick={onCollectDocsApplicant}
                >
                  {t("collect_docs")}
                </div>
              ) : (
                <div
                  className={style.selectBtn}
                  onClick={onSelectOffileFeesApplicant}
                >
                  {t("collect_fee")}
                </div>
              ))}
            {applicant?.payment_status?.toLowerCase() === "online" && (
              <div className={style.onlineBtn} onClick={onCollectDocsApplicant}>
                {t("collect_docs")}
              </div>
            )}
            <img
              src="/images/bank-edit-icon.svg"
              alt="back arrow"
              className={style.back_icon}
              onClick={onEditFeeStructure}
            />
          </div>
        )
      }
      <ApplicationProcessUndo
        applicationId={applicationId}
        studentId={applicant?.student?._id}
        statusId={
          applicant?.docs_collect === "Not Collected"
            ? applicant?.revert_request_status
            : applicant?.docs_collect === "Collected"
            ? applicant?.status_id
            : ""
        }
        onRefetch={onRefetch}
        isSelected={applicant?.docs_collect}
      />
    </div>
  );
};

export default AdmissionSelectCard;
