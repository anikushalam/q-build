import React, { useEffect, useState } from "react";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
import CustomSuspenseGif from "../../../../Custom/SuspenseLoading/CustomSuspenseGif";
import { useOneStudentProfile } from "../../../../hooks/institute/institute-staff-student-api";
import UniversalTab from "../../../../MembersTab/staff/Mainbody/DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StaffHeader from "../../../components/DividerTab/MainContent/StaffAProfile/StaffHeader";
import style from "../../../components/DividerTab/MainContent/StaffAProfile/StaffProfile.module.css";
import StaffProfilePhoto from "../../../components/DividerTab/MainContent/StaffAProfile/StaffProfilePhoto";
import StudentProfileAbout from "./StudentProfileAbout";
import StudentProfileLoginDetails from "../../../../JoiningForm/Edit/StudentProfileLoginDetails";
import { useSelector } from "react-redux";
const StudentAllFeesData = React.lazy(() =>
  import(
    "../../../../MembersTab/student/Mainbody/StudentClass/StudentAllFeesData/StudentAllFeesData"
  )
);
// const FeesData = React.lazy(() => import("./FeesData"));
const StudentReportCardIns = React.lazy(() =>
  import("./StudentReportCardIns/StudentReportCardIns")
);
const StudentReportInsDetails = React.lazy(() =>
  import("./StudentReportCardIns/StudentReportCardInsDetails")
);
const ExtraSkills = React.lazy(() =>
  import(
    "../../../../MembersTab/student/Mainbody/ViewProfile/ExtraSkills/ExtraSkills"
  )
);
const StudentProfile = ({ sid, onClose }) => {
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange?.id);
  const tabContent = [
    {
      name: t("about"),
      id: 0,
    },
    {
      name: t("extra_skills"),
      id: 1,
    },
    {
      name: t("fees_data"),
      id: 2,
    },
    {
      name: t("y_report"),
      id: 3,
    },
  ];
  const [activeIndexTab, setActiveIndexTab] = useState(0);
  const [openLoginDetails, setOpenLoginDetalis] = useState(false);

  const [yearId, setYearId] = useState("");
  const { oneStudentProfile, oneStudentProfileRefetch } = useOneStudentProfile({
    sid: sid,
    skip: !sid,
  });
  useEffect(() => {
    if (sid) oneStudentProfileRefetch();
  }, [sid, oneStudentProfileRefetch]);
  useEffect(() => {
    document.getElementById("scrollStudent")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [sid]);
  const onLoginDetailToggle = () => {
    setOpenLoginDetalis((pre) => !pre);
  };
  return (
    <>
      {!yearId && (
        <div className={style.staff_profile_container}>
          <div id="scrollStudent">
            <StaffHeader
              textLevel={t("student_in_ins")}
              textLevelInner={` (${
                oneStudentProfile?.student?.profile_percentage ?? 0
              }% profile completed)`}
              onClose={onClose}
              viewAs="INSTITUTE_LOGIN_DETAILS"
              admissionTitle={t("login_details")}
              onAdmissionTitle={onLoginDetailToggle}
              sid={oneStudentProfile?.student?._id}
              instituteId={id}
            />
            <BorderBottom />
            <StaffProfilePhoto
              name={`${oneStudentProfile?.student?.studentFirstName || ""} ${
                oneStudentProfile?.student?.studentMiddleName
                  ? oneStudentProfile?.student?.studentMiddleName
                  : ""
              } ${oneStudentProfile?.student?.studentLastName || ""}`}
              designation={`Active class: ${
                // oneStudentProfile?.student?.studentClass?.className || "-"
                oneStudentProfile?.student?.studentClass?.classTitle || "-"
              }`}
              indexNumber={`Roll No. ${
                oneStudentProfile?.student?.studentROLLNO || "-"
              }`}
              grNumber={`${t("gr_number")} ${
                oneStudentProfile?.student?.studentGRNO ?? ""
              }`}
              dynamicImage={
                oneStudentProfile?.student?.studentProfilePhoto
                  ? `${imageShowUrl}/${oneStudentProfile?.student?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              sid={oneStudentProfile?.student?._id}
              activeUrl="student"
              admissionButton={true}
              openAs="INSTITUTE_ADMIN"
              editAs="INSTITUTE"
              is_hostel_link={
                oneStudentProfile?.student?.exist_linked_hostel?.exist_student
                  ?._id ?? ""
              }
              uniqueGr={oneStudentProfile?.student?.studentGRNO}
              onRefetchStudentApi={oneStudentProfileRefetch}
              isGrButtonLock={oneStudentProfile?.student?.query_lock_status}
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
              customStyleTab={{ width: "280px" }}
            />
            <BorderBottom />
          </div>

          {activeIndexTab === 0 && (
            <StudentProfileAbout student={oneStudentProfile?.student} />
          )}
          {activeIndexTab === 1 && (
            <CustomSuspenseGif>
              <ExtraSkills sid={oneStudentProfile?.student?._id} />
            </CustomSuspenseGif>
          )}
          {activeIndexTab === 2 && (
            <CustomSuspenseGif>
              {/* <FeesData
                studentId={oneStudentProfile?.student?._id}
                viewAs="INSTITUTE_ADMIN"
              /> */}
              <StudentAllFeesData
                sid={oneStudentProfile?.student?._id}
                viewAs="INSTITUTE_ADMIN"
              />
            </CustomSuspenseGif>
          )}
          {!yearId && activeIndexTab === 3 && (
            <CustomSuspenseGif>
              <StudentReportCardIns
                // setReportCard={setReportCard}
                studentId={oneStudentProfile?.student?._id}
                setYearId={setYearId}
              />
            </CustomSuspenseGif>
          )}
        </div>
      )}
      {yearId && (
        <CustomSuspense>
          <StudentReportInsDetails yearId={yearId} setYearId={setYearId} />
        </CustomSuspense>
      )}
      {openLoginDetails && (
        <StudentProfileLoginDetails
          onLoginDetailToggle={onLoginDetailToggle}
          loginData={oneStudentProfile?.student?.user}
          sid={oneStudentProfile?.student?._id}
          onRefetch={oneStudentProfileRefetch}
        />
      )}
    </>
  );
};

export default StudentProfile;
