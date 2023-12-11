import React, { useState } from "react";
import style from "./StaffProfile.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import StudentAttendanceProfile from "../../../../StudentTab/MainContent/StudentAProfile/StudentAttendanceProfile";
import { useTranslation } from "react-i18next";
import StudentAdmissionFeesCard from "../../../../StudentTab/MainContent/StudentAProfile/StudentAdmissionFeesCard";
import StudentCertificateButton from "../../../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/StudentCertificateButton";
import StudentIdCardButton from "../../../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/StudentIdCardButton";
import StudentEditGr from "../../../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/StudentEditGr";
import { useExportZipStudentProfilePhoto } from "../../../../../hooks/ExportData/export-data-api";
import { fileShowUrl } from "../../../../../services/BaseUrl";
import QLoader from "../../../../../Loader/QLoader";

const STUDENT_ACCESS_FIELD = [
  // for edit student form by admission
  // "ADMISSION_ADMIN",
  "SUBJECT_TEACHER",
  "LEAVING_FORM",
  "FINANCE_MANAGER",
  "ADMISSION_ADMIN_SCHOLARSHIP",
  "VIEW_ADMISSION_PAGE_FEES",
  "INSTITUTE_ADMIN",
  "STUDENT",
  "CERTIFICATE_AUTHORITY",
  "ID_CARD_SECTION",
  // "STUDENT_SECTION",
];
const STUDENT_GR_ACCESS_FIELD = [
  "ADMISSION_ADMIN",
  "FINANCE_MANAGER",
  "CERTIFICATE_AUTHORITY",
  "STUDENT_SECTION",
  "ID_CARD_SECTION",
  "INSTITUTE_ADMIN",
];
const StaffProfilePhoto = ({
  dynamicImage,
  indexNumber,
  designation,
  name,
  activeUrl,
  sid,
  viewAs,
  openAs,
  onEdit,
  grNumber,
  carryParrentState,
  admissionButton,
  is_hostel_link,
  is_view_profile,
  editAs,
  uniqueGr,
  instituteId,
  onRefetchStudentApi,
  isGrButtonLock,
  currentDesignation,
  // onUpdateDesignation,
}) => {
  const { t } = useTranslation();
  const params = useParams();
  const getQuery = useLocation();
  const ids = useSelector((state) => state.idChange.loginProfile);
  const [editGr, setEditGr] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [exportZipStudentProfilePhoto] = useExportZipStudentProfilePhoto();

  const onZipDownload = () => {
    setDisabled(true);
    exportZipStudentProfilePhoto({
      instituteId: sid,
    })
      .then((res) => {
        window.open(`${fileShowUrl}/${res?.data?.Key}`, "_blank");
        setDisabled(false);
      })
      .catch({});
  };

  const onToggleGr = () => {
    if (isGrButtonLock === "Locked") {
      return null;
    } else {
      setEditGr((pre) => !pre);
    }
  };

  return (
    <>
      <div
        className={style.staff_profile_photo_container}
        style={{
          minHeight: openAs === "CERTIFICATE_AUTHORITY" ? "12rem" : "5rem",
        }}
      >
        {openAs === "ID_CARD_SECTION" ? (
          <img
            src={dynamicImage}
            // src="/images/profileAndCover/department-cover.svg"
            alt="staff avatar"
            className={style.staff_profile_photo_image}
            style={{
              cursor: "pointer",
            }}
            title="Download profile photo"
            onClick={onZipDownload}
          />
        ) : (
          <img
            src={dynamicImage}
            // src="/images/profileAndCover/department-cover.svg"
            alt="staff avatar"
            className={style.staff_profile_photo_image}
          />
        )}

        <div className={style.staff_profile_photo_info}>
          <h5 className={style.staff_profile_photo_name}>
            {name}
            {is_view_profile === "HOSTEL" ? (
              <Link
                to={`/q/${params.username}/student/profile/`}
                state={{
                  sid: sid,
                  viewAs: openAs,
                  instituteId: getQuery.state?.instituteId,
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "400",
                    color: "#0000ff",
                  }}
                >
                  {` (${t("view_profile")})`}
                </span>
              </Link>
            ) : (
              is_hostel_link && (
                <Link
                  to={`/q/${params.username}/student/profile/hostel`}
                  state={{
                    sid: sid,
                    viewAs: openAs,
                    instituteId: getQuery.state?.instituteId,
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "400",
                      color: "#0000ff",
                    }}
                  >
                    {` (${t("hostel_profile")})`}
                  </span>
                </Link>
              )
            )}
          </h5>
          <p className={style.staff_profile_photo_index}>{indexNumber}</p>
          {activeUrl === "student" && (
            <p className={style.staff_profile_photo_index}>
              {grNumber}
              {STUDENT_GR_ACCESS_FIELD?.includes(openAs) && (
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color:
                      isGrButtonLock === "Locked"
                        ? "rgb(177 177 176)"
                        : "#0000ff",
                    cursor: "pointer",
                  }}
                  onClick={onToggleGr}
                >
                  {` (${t(
                    isGrButtonLock === "Locked" ? "requested" : "edit_"
                  )})`}
                </span>
              )}
            </p>
          )}

          <p className={style.staff_profile_photo_index}>{designation}</p>
          {currentDesignation && (
            <p className={style.staff_profile_photo_index}>
              {currentDesignation}
            </p>
          )}
        </div>
        {activeUrl === "student" && openAs === "VIEW_ADMISSION_PAGE_FEES" ? (
          <StudentAdmissionFeesCard
            carryParrentState={carryParrentState}
            studentId={sid}
          />
        ) : (
          activeUrl === "student" && (
            <>
              <Link
                to={`/q/${params.username}/student/profile/admission`}
                state={{
                  sid: sid,
                  viewAs: openAs,
                  instituteId: getQuery.state?.instituteId,
                }}
              >
                <div
                  className={style.link_hold_container}
                  style={{
                    right: admissionButton ? "40%" : "35%",
                  }}
                >
                  <img src="/images/link-forword-icon.svg" alt="forword link" />
                  <h6>{t("admission_fees")}</h6>
                </div>
              </Link>
              {/* {is_view_profile === "HOSTEL" ? (
              <Link
                to={`/q/${params.username}/student/profile/`}
                state={{ sid: sid, viewAs: openAs }}
              >
                <div
                  className={style.link_hold_container_hostel}
                  style={{
                    right: admissionButton ? "41%" : "36%",
                  }}
                >
                  <img src="/images/link-forword-icon.svg" alt="forword link" />
                  <h6>{t("view_profile")}</h6>
                </div>
              </Link>
            ) : (
              is_hostel_link && (
                <Link
                  to={`/q/${params.username}/student/profile/hostel`}
                  state={{ sid: sid, viewAs: openAs }}
                >
                  <div
                    className={style.link_hold_container_hostel}
                    style={{
                      right: admissionButton ? "40.5%" : "35.5%",
                    }}
                  >
                    <img
                      src="/images/link-forword-icon.svg"
                      alt="forword link"
                    />
                    <h6>{t("hostel_profile")}</h6>
                  </div>
                </Link>
              )
            )} */}
            </>
          )
        )}
        {openAs === "CERTIFICATE_AUTHORITY" ? (
          <StudentCertificateButton
            uniqueGr={uniqueGr}
            instituteId={instituteId}
          />
        ) : openAs === "ID_CARD_SECTION" ? (
          <StudentIdCardButton sid={sid} />
        ) : (
          // <StudentCertificateButton
          //   uniqueGr={uniqueGr}
          //   instituteId={instituteId}
          // />
          activeUrl === "student" && (
            <StudentAttendanceProfile
              studentId={sid}
              openAs={openAs}
              editAs={editAs}
            />
          )
        )}
        {editAs === "STAFF" ? null : //   onClick={onUpdateDesignation} //   className={style.staff_designation_btn} // <div
        // >
        //   {t("update")}
        // </div>
        editAs === "INSTITUTE" ? (
          <Link
            to={`/q/${ids.username}/edit/${activeUrl}`}
            state={{
              openAs: "INSTITUTE_SIDE",
              sid: sid,
            }}
          >
            <img
              src="/images/user-pencil-edit.svg"
              alt="edit icon"
              className={style.staff_profile_photo_edit}
            />
          </Link>
        ) : STUDENT_ACCESS_FIELD?.includes(openAs) ? (
          ""
        ) : viewAs ? (
          <img
            src="/images/user-pencil-edit.svg"
            alt="edit icon"
            className={style.staff_profile_photo_edit}
            onClick={onEdit}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <Link
            to={`/q/${ids.username}/edit/${activeUrl}`}
            state={{
              openAs: "INSTITUTE_SIDE",
              sid: sid,
            }}
          >
            <img
              src="/images/user-pencil-edit.svg"
              alt="edit icon"
              className={style.staff_profile_photo_edit}
            />
          </Link>
        )}
      </div>

      {editGr && (
        <StudentEditGr
          onClose={onToggleGr}
          uniqueGr={uniqueGr}
          studentId={sid}
          onRefetch={onRefetchStudentApi}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default StaffProfilePhoto;
