import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomSuspenseGif from "../../../../../Custom/SuspenseLoading/CustomSuspenseGif";
import Navbar from "../../../../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { useOneStudentProfile } from "../../../../../hooks/institute/institute-staff-student-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StaffHeader from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/StaffHeader";
import StaffProfilePhoto from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/StaffProfilePhoto";
import StudentProfileAbout from "../../../../../StaffTab/StudentTab/MainContent/StudentAProfile/StudentProfileAbout";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../../../../../JoiningForm/Student/Form/JoinForm.module.css";
import { useGetOneUserProfileQuery } from "../../../../../services/qvipleAPI";
import { useSelector } from "react-redux";
import EditConfirm from "./EditConfirm";
import InsNavbar from "../../../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import StudentProfileLoginDetails from "../../../../../JoiningForm/Edit/StudentProfileLoginDetails";
import StudentHostelAllFeesData from "../../../../student/Mainbody/StudentClass/StudentAllFeesData/StudentHostelAllFeesData";
import StudentHostelRenewal from "../../../../student/Mainbody/StudentHostel/StudentHostelRenewal";

const loginAccess = ["INSTITUTE", "INSTITUTE_ADMIN"];
const StudentProfileInHostelView = () => {
  const { t } = useTranslation();
  const tabContent = [
    {
      name: t("about"),
      id: 0,
    },
    {
      name: t("fees_data"),
      id: 1,
    },
    {
      name: t("hostel_renewal"),
      id: 2,
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const ids = useSelector((state) => state.idChange.id);
  const { data: profileData } = useGetOneUserProfileQuery(ids, {
    skip: !ids,
  });
  const [activeIndexTab, setActiveIndexTab] = useState(0);
  const [openLoginDetails, setOpenLoginDetalis] = useState(false);

  const { oneStudentProfile, oneStudentProfileRefetch } = useOneStudentProfile({
    sid: location.state?.sid,
    skip: !location.state?.sid,
  });
  useEffect(() => {
    if (location.state?.sid) oneStudentProfileRefetch();
  }, [location.state?.sid, oneStudentProfileRefetch]);
  useEffect(() => {
    if (
      location.state?.viewAs === "ADMISSION_ADMIN_SCHOLARSHIP" ||
      location.state?.openTab === "FEES_DATA"
    ) {
      setActiveIndexTab(1);
    }
  }, [location.state?.viewAs, location.state?.openTab]);
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
  const onClose = () => {
    setEdit((pre) => !pre);
  };
  const onEdit = () => {
    setEdit(true);
  };
  const onLoginDetailToggle = () => {
    setOpenLoginDetalis((pre) => !pre);
  };
  return (
    <div>
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
        style={{ marginBottom: "1rem" }}
      >
        <StaffHeader
          textLevel={"Student Hostel Profile"}
          viewAs={true}
          is_admission={
            loginAccess.includes(location.state?.viewAs) ? true : false
          }
          admissionTitle={t("login_details")}
          onAdmissionTitle={onLoginDetailToggle}
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
          viewAs={
            location.state?.viewAs === "ADMISSION_ADMIN" ||
            location.state?.viewAs === "SUBJECT_TEACHER" ||
            location.state?.viewAs === "STUDENT" ||
            location.state?.viewAs === "INSTITUTE"
              ? false
              : true
          }
          openAs={location.state?.viewAs}
          onEdit={onEdit}
          is_view_profile="HOSTEL"
        />
        <div
          style={{
            marginTop: "1.7rem",
          }}
        ></div>
        <UniversalTab
          tabList={tabContent}
          activeIndexTab={activeIndexTab}
          setActiveIndexTab={setActiveIndexTab}
          customStyleTab={{ width: "33.3%" }}
        />
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        {activeIndexTab === 0 && (
          <StudentProfileAbout
            student={oneStudentProfile?.student}
            viewAs={true}
          />
        )}
        {activeIndexTab === 2 && (
          <CustomSuspenseGif>
            <div
              style={{
                padding: "1rem",
              }}
            >
              <StudentHostelRenewal
                sid={oneStudentProfile?.student?._id}
                isProfile={location.state?.viewAs}
                isOther
              />
            </div>
          </CustomSuspenseGif>
        )}
        {activeIndexTab === 1 && (
          <CustomSuspenseGif>
            <StudentHostelAllFeesData
              sid={oneStudentProfile?.student?._id}
              viewAs={location.state?.viewAs}
            />
          </CustomSuspenseGif>
        )}
      </div>
      {edit && (
        <EditConfirm
          onClose={onClose}
          sid={oneStudentProfile?.student?._id}
          openAs={location.state?.viewAs}
        />
      )}
      {openLoginDetails && (
        <StudentProfileLoginDetails
          onLoginDetailToggle={onLoginDetailToggle}
          loginData={oneStudentProfile?.student?.user}
          sid={oneStudentProfile?.student?._id}
          onRefetch={oneStudentProfileRefetch}
        />
      )}
    </div>
  );
};

export default StudentProfileInHostelView;
