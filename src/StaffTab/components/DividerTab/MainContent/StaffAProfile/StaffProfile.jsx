import React, { useEffect, useState } from "react";
import CustomSuspenseGif from "../../../../../Custom/SuspenseLoading/CustomSuspenseGif";
import { useOneStaffProfile } from "../../../../../hooks/institute/institute-staff-student-api";
import UniversalTab from "../../../../../MembersTab/staff/Mainbody/DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "./BorderBottom";
import StaffHeader from "./StaffHeader";
import { useTranslation } from "react-i18next";
import style from "./StaffProfile.module.css";
import StaffProfileAbout from "./StaffProfileAbout";
import StaffProfilePhoto from "./StaffProfilePhoto";
import StudentProfileLoginDetails from "../../../../../JoiningForm/Edit/StudentProfileLoginDetails";
// const StaffProfileEidt = React.lazy(() => import("./StaffProfileEdit"));

const Payroll = React.lazy(() =>
  import("../../../../../MembersTab/staff/Mainbody/ViewProfile/Payroll/Payroll")
);
const StaffAttendence = React.lazy(() =>
  import("./StaffAttendence/StaffAttendence")
);
const StaffProfile = ({ sid, onClose }) => {
  const { t } = useTranslation();
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
  // const [edit, setEdit] = useState("");
  // const [open, setOpen] = useState("");
  const [openLoginDetails, setOpenLoginDetalis] = useState(false);

  const { oneStaffProfile, oneStaffProfileRefetch } = useOneStaffProfile({
    sid: sid,
    skip: !sid,
  });
  useEffect(() => {
    if (sid) oneStaffProfileRefetch();
  }, [sid, oneStaffProfileRefetch]);
  // useEffect(() => {
  //   setEdit("");
  // }, [sid]);

  // const editHandler = (val) => {
  //   setOpen(false);
  //   setEdit(val);
  // };

  const onLoginDetailToggle = () => {
    setOpenLoginDetalis((pre) => !pre);
  };
  return (
    <div className={style.staff_profile_container}>
      <StaffHeader
        textLevel={t("staff_profile_ins")}
        onClose={onClose}
        viewAs="INSTITUTE_LOGIN_DETAILS"
        admissionTitle={t("login_details")}
        onAdmissionTitle={onLoginDetailToggle}
        isStaff
      />
      <BorderBottom />
      <StaffProfilePhoto
        name={`${oneStaffProfile?.staff?.staffFirstName || ""} ${
          oneStaffProfile?.staff?.staffMiddleName
            ? oneStaffProfile?.staff?.staffMiddleName
            : ""
        } ${oneStaffProfile?.staff?.staffLastName || ""}`}
        designation={`Designations: ${
          oneStaffProfile?.staff?.staffDesignationCount || 0
        }`}
        indexNumber={`Index No. ${oneStaffProfile?.staff?.staffROLLNO || "-"}`}
        dynamicImage={
          oneStaffProfile?.staff?.photoId !== "1"
            ? `${imageShowUrl}/${oneStaffProfile?.staff?.staffProfilePhoto}`
            : "/images/ins_default_profile.svg"
        }
        sid={oneStaffProfile?.staff?._id}
        activeUrl="staff"
        currentDesignation={`${t("form_current_designation_label")}: ${
          oneStaffProfile?.staff?.current_designation ?? ""
        }`}
      />
      <UniversalTab
        tabList={tabContent}
        activeIndexTab={activeIndexTab}
        setActiveIndexTab={setActiveIndexTab}
        customStyleTab={{ width: "280px" }}
      />
      <BorderBottom />

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
      {openLoginDetails && (
        <StudentProfileLoginDetails
          onLoginDetailToggle={onLoginDetailToggle}
          loginData={oneStaffProfile?.staff?.user}
          sid={oneStaffProfile?.staff?._id}
          onRefetch={oneStaffProfileRefetch}
          is_staff
        />
      )}
    </div>
  );
};

export default StaffProfile;
