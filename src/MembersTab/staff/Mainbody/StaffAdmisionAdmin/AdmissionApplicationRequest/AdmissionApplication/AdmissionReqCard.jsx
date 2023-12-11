import React, { useState } from "react";
import style from "../AdmissionApplicationRequest.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import QLoader from "../../../../../../Loader/QLoader";
import {
  imageShowUrl,
  pdfShowUrlNext,
} from "../../../../../../services/BaseUrl";
import CustomSuspense from "../../../../../../Custom/SuspenseLoading/CustomSuspense";
import { useSelectAdmissionApplicant } from "../../../../../../hooks/member_tab/admission-api";
import SelectFeeStructure from "../AdmssionStructureSelection/SelectFeeStructure";
const AdmissionCancelApplication = React.lazy(() =>
  import("./AdmissionCancelApplication")
);

const AdmissionReqCard = ({
  applicant,
  onRefetchWhenSelect,
  applicationId,
  departmentId,
  classMasterId,
  batchId,
  instituteId,
}) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const [cancelApplicant, setCancelApplicant] = useState(false);
  const [selectFee, setSelectFee] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selectAdmissionApplicant] = useSelectAdmissionApplicant();
  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        sid: applicant?.student?._id,
        viewAs: "ADMISSION_ADMIN",
        instituteId: instituteId,
      },
    });
  };

  const onSelectStudent = (e) => {
    e.stopPropagation();
    setSelectFee(true);
  };

  const onCancelStudent = (e) => {
    e.stopPropagation();
    setCancelApplicant((pre) => !pre);
  };

  const onAssginStudentStructure = (feeStructureId) => {
    if (
      applicant?.student?._id !== "" &&
      applicationId !== "" &&
      feeStructureId
    ) {
      setDisabled((pre) => !pre);
      selectAdmissionApplicant({
        sid: applicant?.student?._id,
        aid: applicationId,
        selectApplicant: {
          fee_struct: feeStructureId,
        },
      })
        .then(() => {
          onRefetchWhenSelect();
          setDisabled((pre) => !pre);
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };

  const onViewApplication = (e) => {
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
            loading="lazy"
          />
          <div className={style.applicant_card_inner_info}>
            <h6>{`${applicant?.student?.studentFirstName} ${
              applicant?.student?.studentMiddleName
                ? applicant?.student?.studentMiddleName
                : ""
            } ${applicant?.student?.studentLastName}`}</h6>
            <p>
              {t("applied_on")}:{" "}
              {moment(applicant?.apply_on).format("DD MMM yyyy")}
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
        <div
          className={style.applicant_card_reciept}
          onClick={onViewApplication}
        >
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
        <div className={style.application_button}>
          <div
            className={style.selectAppBtnContainer}
            onClick={onSelectStudent}
          >
            <div className={style.selectBtn}>{t("select")}</div>
          </div>
          <div
            className={style.selectAppBtnContainer}
            onClick={onCancelStudent}
          >
            <div className={style.cancelledBtn}>{t("reject")}</div>
          </div>
        </div>
      </div>

      <CustomSuspense>
        {cancelApplicant && (
          <AdmissionCancelApplication
            studentId={applicant?.student?._id}
            applicationId={applicationId}
            onClose={() => setCancelApplicant((pre) => !pre)}
            onRefetchWhenSelect={onRefetchWhenSelect}
          />
        )}
      </CustomSuspense>

      {selectFee && (
        <SelectFeeStructure
          departmentId={departmentId}
          classMasterId={classMasterId}
          batchId={batchId}
          onClose={() => setSelectFee((pre) => !pre)}
          onSelectedStudent={onAssginStudentStructure}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default AdmissionReqCard;
