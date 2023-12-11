import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../../../../../JoiningForm/Student/Form/JoinForm.module.css";
import { useGetOneUserProfileQuery } from "../../../../../services/qvipleAPI";
import { useSelector } from "react-redux";
import Navbar from "../../../../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import StaffHeader from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/StaffHeader";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StaffProfilePhoto from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/StaffProfilePhoto";
import { useTranslation } from "react-i18next";
import { useOneStudentProfile } from "../../../../../hooks/institute/institute-staff-student-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import AdmissionFeesUniversal from "../../../../../StaffTab/StudentTab/MainContent/StudentAProfile/StudentFees/AdmissionFeesUniversal";
import InsNavbar from "../../../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import AddStudentAdmissionCard from "./AddStudentAdmissionCard/AddStudentAdmissionCard";
import { useAdmissionInstallmentEditFeesByAdmission } from "../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../Loader/QLoader";

const editAccess = [
  "INSTITUTE_ADMIN",
  "FINANCE_MANAGER",
  "ADMISSION_ADMIN",
  "ADMISSION_ADMIN_SCHOLARSHIP",
];
const StudentAdmissionFeesInClassView = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const ids = useSelector((state) => state.idChange.id);
  const [addAdmissionCard, setAddAdmissionCard] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { data: profileData } = useGetOneUserProfileQuery(ids, {
    skip: !ids,
  });

  const { oneStudentProfile, oneStudentProfileRefetch } = useOneStudentProfile({
    sid: location.state?.sid,
    skip: !location.state?.sid,
  });

  const [admissionInstallmentEditFeesByAdmission] =
    useAdmissionInstallmentEditFeesByAdmission();
  useEffect(() => {
    if (location.state?.sid) oneStudentProfileRefetch();
  }, [location.state?.sid, oneStudentProfileRefetch]);
  useEffect(() => {
    document.getElementById("scrollView")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [location.state?.sid]);
  const onGoback = () => {
    navigate(-1);
  };

  const onAdmissionTitle = () => {
    setAddAdmissionCard((pre) => !pre);
  };
  const onInstallTitle = (e) => {
    if (
      location.state?.sid &&
      (oneStudentProfile?.student?.institute?._id ||
        location.state?.instituteId)
    ) {
      setDisabled((pre) => !pre);
      admissionInstallmentEditFeesByAdmission({
        flow:
          location.state?.viewAs === "FINANCE_MANAGER"
            ? "Finance_Manager"
            : location.state?.viewAs === "INSTITUTE_ADMIN"
            ? "Institute_Admin"
            : "Admission_Admin",
        editAccess: {
          id: oneStudentProfile?.student?.institute?._id,
          sid: location.state?.sid,
          online_amount_edit_access: e.target.checked
            ? "Granted"
            : "Not Granted",
        },
      })
        .then(() => {
          oneStudentProfileRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      <div className={style.navbar}>
        {location.state?.viewAs === "INSTITUTE" ? (
          <InsNavbar status="home" />
        ) : (
          <Navbar
            status="members"
            profileId={profileData ? profileData?.user?._id : ""}
            username={profileData?.user?.username}
            name={profileData?.user?.userLegalName}
            photoId={profileData?.user?.photoId}
            profilePhoto={profileData?.user?.profilePhoto}
            profileData={profileData?.user}
          />
        )}
      </div>

      <div className={style.goback_container} id="scrollView">
        <div className={style.goback_container_text} onClick={onGoback}>
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      </div>

      <div
        className={style.student_from_container}
        style={{ marginBottom: "1rem", minHeight: "40rem" }}
      >
        <StaffHeader
          textLevel={"Student Admission Fees"}
          viewAs={true}
          is_admission={location.state?.viewAs !== "STUDENT" ? true : false}
          admissionTitle={t("add_admission_card")}
          onAdmissionTitle={onAdmissionTitle}
          is_install={
            editAccess.includes(location.state?.viewAs) ? true : false
          }
          installTitle={t("online_install_edit_fees")}
          onInstallTitle={onInstallTitle}
          installmentEdit={
            oneStudentProfile?.student?.online_amount_edit_access === "Granted"
              ? true
              : false
          }
        />
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        <StaffProfilePhoto
          name={`${oneStudentProfile?.student?.studentFirstName || ""} ${
            oneStudentProfile?.student?.studentMiddleName
              ? oneStudentProfile?.student?.studentMiddleName
              : ""
          } ${oneStudentProfile?.student?.studentLastName || ""}`}
          designation={`Active class: ${
            oneStudentProfile?.student?.studentClass?.classTitle || "-"
            // oneStudentProfile?.student?.studentClass?.className || "-"
          }`}
          indexNumber={`Roll No. ${
            oneStudentProfile?.student?.studentROLLNO || "-"
          }`}
          grNumber={`${t("gr_number")} ${
            oneStudentProfile?.student?.studentGRNO ?? ""
          }`}
          dynamicImage={
            oneStudentProfile?.student?.photoId !== "1"
              ? `${imageShowUrl}/${oneStudentProfile?.student?.studentProfilePhoto}`
              : "/images/ins_default_profile.svg"
          }
          sid={oneStudentProfile?.student?._id}
          activeUrl="student"
          viewAs={false}
          openAs={"VIEW_ADMISSION_PAGE_FEES"}
          carryParrentState={location.state}
        />
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "2.7rem",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        />
        <AdmissionFeesUniversal
          studentId={oneStudentProfile?.student?._id}
          viewAs={location.state?.viewAs}
        />
        {addAdmissionCard && (
          <AddStudentAdmissionCard
            onClose={onAdmissionTitle}
            admissionId={
              oneStudentProfile?.student?.institute?.admissionDepart?.[0]
            }
            instituteId={oneStudentProfile?.student?.institute?._id}
            sid={oneStudentProfile?.student?._id}
          />
        )}
      </div>

      {disabled && <QLoader />}
    </>
  );
};

export default StudentAdmissionFeesInClassView;
