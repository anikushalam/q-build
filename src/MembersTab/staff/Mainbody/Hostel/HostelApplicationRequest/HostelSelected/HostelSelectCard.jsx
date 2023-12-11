import React from "react";
import { useTranslation } from "react-i18next";
import style from "../../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import {
  imageShowUrl,
  pdfShowUrlNext,
} from "../../../../../../services/BaseUrl";
// import CustomGenerateStudentHostelFormPdf from "../HostelApplication/CustomGenerateStudentHostelFormPdf";
// import { useEditStructureByHostel } from "../../../../../../hooks/member_tab/hostel-api";
// import QLoader from "../../../../../../Loader/QLoader";
// import SelectHostelFeeStrucutre from "../HostelApplication/SelectHostelFeeStrucutre";

const HostelSelectCard = ({
  onSelectOffileFees,
  applicant,
  // onCollectDocs,
  // onNotConfirm,
  // applicationId,
  // onRefetchWhenConfirm,
  // hostelId,
  // batchId,
  // instituteId,
  // applicationName,
}) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  // const [disabled, setDisabled] = useState(false);
  // console.info("tjehghjvxmvzx", applicant);

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

  // const onEditFeeStructure = (e) => {
  //   e.stopPropagation();
  //   setEditFee(true);
  //   // onEditFee(applicant?.student?._id);
  // };

  const onRequestedOpen = (e) => {
    e.stopPropagation();
  };

  // const onFeeStructureConfirm = (val) => {
  //   if (applicant?.student?._id !== "" && applicationId !== "") {
  //     setDisabled((pre) => !pre);
  //     editStructureByHostel({
  //       sid: applicant?.student?._id,
  //       aid: applicationId,
  //       editStructure: {
  //         ...val,
  //       },
  //     })
  //       .then(() => {
  //         onRefetchWhenConfirm();
  //         setDisabled((pre) => !pre);
  //       })
  //       .catch(() => {
  //         setDisabled((pre) => !pre);
  //       });
  //   }
  // };
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

        {
          applicant?.payment_status?.toLowerCase() === "pending" ? (
            <div
              className={style.selectBtnContainer}
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <div
                className={style.selectBtn}
                onClick={onSelectOffileFeesApplicant}
              >
                {t("collect_fee")}
              </div>
              {/* {applicant?.student?.application_print?.[0]?.value ? null : (
                <CustomGenerateStudentHostelFormPdf
                  studentId={applicant?.student?._id}
                  applicationName={applicationName}
                  instituteId={instituteId}
                />
              )} */}
            </div>
          ) : applicant?.payment_status?.toLowerCase() ===
            "receipt requested" ? (
            <div className={style.selectBtnContainer}>
              <div
                className={style.receipt_requested_btn}
                onClick={onRequestedOpen}
              >
                {t("receipt_requested")}
              </div>
              {/* {applicant?.student?.application_print?.[0]?.value ? null : (
                <CustomGenerateStudentHostelFormPdf
                  studentId={applicant?.student?._id}
                  applicationName={applicationName}
                  instituteId={instituteId}
                />
              )} */}
            </div>
          ) : null
          //  (
          //   <div className={style.selectBtnContainer}>
          //     {applicant?.payment_status?.toLowerCase() === "offline" && (
          //       <div
          //         className={style.selectBtn}
          //         onClick={onSelectOffileFeesApplicant}
          //       >
          //         {t("collect_fee")}
          //       </div>
          //     )}
          //   </div>
          // )
        }
      </div>
      {/* {disabled && <QLoader />} */}
      {/* {editFee && (
        <SelectHostelFeeStrucutre
          hostelId={hostelId}
          batchId={batchId}
          onClose={() => setEditFee((pre) => !pre)}
          onSelectedStudent={onFeeStructureConfirm}
        />
      )} */}
    </>
  );
};

export default HostelSelectCard;
