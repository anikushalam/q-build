import React, { useEffect, useState } from "react";
import InsNavbar from "../../../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import Navbar from "../../../../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useOneStaffProfile } from "../../../../../hooks/institute/institute-staff-student-api";
import StudentProfileLoginDetails from "../../../../../JoiningForm/Edit/StudentProfileLoginDetails";
import StaffProfileAbout from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/StaffProfileAbout";
import StaffAttendence from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/StaffAttendence/StaffAttendence";
import Payroll from "../../ViewProfile/Payroll/Payroll";
import CustomSuspenseGif from "../../../../../Custom/SuspenseLoading/CustomSuspenseGif";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import StaffHeader from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/StaffHeader";
import style from "../../../../../JoiningForm/Student/Form/JoinForm.module.css";
import { useGetOneUserProfileQuery } from "../../../../../services/qvipleAPI";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import OnlyStaffProfilePhoto from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/OnlyStaffProfilePhoto";
import LeavesAndTransferConfigurationPopup from "../../LeaveAndTransferAuthority/LeavesAndTransferConfigurationPopup";
import CreateStaffLeave from "../../Leaves/CreateStaffLeave";

const StaffProfileInHead = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();

  const tabContent = [
    {
      name: t("about"),
      id: 0,
    },
    {
      name: t("attendance"),
      id: 1,
    },
    {
      name: t("payroll_info"),
      id: 2,
    },
  ];
  const [activeIndexTab, setActiveIndexTab] = useState(0);
  const [openLoginDetails, setOpenLoginDetalis] = useState(false);
  const [leaveConfig, setLeaveConfig] = useState(false);
  const [cOff, setCOff] = useState(false);
  const ids = useSelector((state) => state.idChange.id);
  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(ids, {
      skip: !ids,
    });
  const { oneStaffProfile, oneStaffProfileRefetch } = useOneStaffProfile({
    sid: getQuery.state?.sid,
    skip: !getQuery.state?.sid,
  });
  useEffect(() => {
    document.getElementById("scrollView")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [getQuery.state?.sid]);
  const onGoback = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (ids) profileDataRefetch();
  }, [ids, profileDataRefetch]);

  useEffect(() => {
    if (getQuery.state?.sid) oneStaffProfileRefetch();
  }, [getQuery.state?.sid, oneStaffProfileRefetch]);

  const onLoginDetailToggle = () => {
    setOpenLoginDetalis((pre) => !pre);
  };

  const onConfig = () => {
    setLeaveConfig((pre) => !pre);
  };
  const onConfig1 = () => {
    setCOff((pre) => !pre);
  };
  return (
    <div>
      <div className={style.navbar}>
        {getQuery.state?.viewAs === "INSTITUTE" ? (
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
          textLevel={t("staff_profile_ins")}
          viewAs="DEPARTMENT_HEAD"
          configTitle={t("leave_setting")}
          onConfig={onConfig}
          configTitle1={t("request_c_off_leave")}
          onConfig1={onConfig1}
        />
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <OnlyStaffProfilePhoto
          name={`${oneStaffProfile?.staff?.staffFirstName || ""} ${
            oneStaffProfile?.staff?.staffMiddleName
              ? oneStaffProfile?.staff?.staffMiddleName
              : ""
          } ${oneStaffProfile?.staff?.staffLastName || ""}`}
          designation={`Designations: ${
            oneStaffProfile?.staff?.staffDesignationCount || 0
          }`}
          indexNumber={`Index No. ${
            oneStaffProfile?.staff?.staffROLLNO || "-"
          }`}
          dynamicImage={
            oneStaffProfile?.staff?.staffProfilePhoto
              ? `${imageShowUrl}/${oneStaffProfile?.staff?.staffProfilePhoto}`
              : "/images/ins_default_profile.svg"
          }
          currentDesignation={`${t("form_current_designation_label")}: ${
            oneStaffProfile?.staff?.current_designation ?? ""
          }`}
          // sid={oneStaffProfile?.staff?._id}
          // activeUrl="staff"
          // viewAs={getQuery.state?.viewAs}
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
          <StaffProfileAbout staff={oneStaffProfile?.staff} />
        )}
        {activeIndexTab === 1 && (
          <CustomSuspenseGif>
            <StaffAttendence sid={oneStaffProfile?.staff?._id} />
          </CustomSuspenseGif>
        )}
        {activeIndexTab === 2 && (
          <CustomSuspenseGif>
            <Payroll sid={oneStaffProfile?.staff?._id} />
          </CustomSuspenseGif>
        )}
      </div>

      {openLoginDetails && (
        <StudentProfileLoginDetails
          onLoginDetailToggle={onLoginDetailToggle}
          loginData={oneStaffProfile?.staff?.user}
          sid={oneStaffProfile?.staff?._id}
          onRefetch={oneStaffProfileRefetch}
          is_staff
        />
      )}
      {leaveConfig && (
        <LeavesAndTransferConfigurationPopup
          onRefetch={oneStaffProfileRefetch}
          sid={oneStaffProfile?.staff?._id}
          onClose={onConfig}
          leaveConfig={{
            casual_leave: oneStaffProfile?.staff?.casual_leave,
            medical_leave: oneStaffProfile?.staff?.medical_leave,
            sick_leave: oneStaffProfile?.staff?.sick_leave,
          }}
        />
      )}
      {cOff && (
        <CreateStaffLeave
          createdBy="OWN_PROFILE"
          staffId={oneStaffProfile?.staff?._id}
          onRefetch={oneStaffProfileRefetch}
          onClose={onConfig1}
        />
      )}
    </div>
  );
};

export default StaffProfileInHead;
